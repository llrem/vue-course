<template>
    <div class="wrapper">
        <div class="login-container">
            <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
                <p>login form</p>
                <el-form-item prop="username">
                    <el-input
                        v-model="loginForm.username"
                        placeholder="用户名"
                        ref="username">
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        class="paw"
                        type="password"
                        v-model="loginForm.password"
                        placeholder="密码"
                        ref="password">
                    </el-input>
                </el-form-item>
                <el-form-item class="btn">
                    <el-button size="medium" type="primary" @click="onSubmit">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>

</template>

<script>
    export default {
        name: "login",
        data() {
            return{
                loginForm:{
                    username:'11821380101',
                    password:'123456'
                },
                loginRules: {
                    username: [{ required: true, trigger: 'blur', message:'请输入用户名' }],
                    password: [
                        { required: true, trigger: 'blur', message:'请输入密码'},
                        { min:6, max:12, message: '长度为6到12个字符',trigger: 'blur'}
                    ]
                },
            }
        },
        methods:{
            onSubmit() {
                this.$refs.loginForm.validate(valid =>{
                    if(valid){
                        const _this = this
                        this.$http.post('http://localhost:8081/login',this.loginForm).then((response) => {
                            console.log(response);
                            // const jwt = response.headers['authorization']
                            const userInfo = response.data.data;
                            if(response.data.code===200){
                                // _this.$store.commit("SET_TOKEN",jwt)
                                _this.$store.commit("SET_USERINFO",userInfo)
                                this.$router.push({
                                    path:'/home',
                                    query:{
                                        role:response.data.role
                                    }
                                })
                            }else{
                                alert("用户名或密码错误！")
                            }
                        })
                    }else {
                        console.log('error submit!!')
                        return false
                    }
                })
            }
        }
    }
</script>

<style lang="scss">
.wrapper{
    background-color: #304156;
    height: 100%;
}
.el-form{
    position: relative;
    top: 145px;
    width: 330px;
    padding:20px;
    margin:0 auto;
    border-radius: 7px;
    background-color: white;
    text-align: center;
    p{
        margin: 10px 0 25px 0;
        font-size: 22px;
        font-weight: bold;
    }
    .el-button{
        width: 100%;
    }
    .btn{
       margin:32px 0 0 0;
    }
}
</style>

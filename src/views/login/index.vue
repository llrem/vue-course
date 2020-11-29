<template>
    <div class="wrapper">
        <div class="login-container">
            <el-form ref="form">
                <p>login form</p>
                <el-form-item>
                    <el-input v-model="form.username" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input class="paw" type="password" v-model="form.password" placeholder="密码"></el-input>
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
        data(){
            return{
                form:{
                    username:'',
                    password:''
                }
            }
        },
        methods:{
            onSubmit() {
                this.$http.get('http://localhost:8081/login').then((response) => {
                    console.log(response.data)
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
    top: 150px;
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
       margin:30px 0 0 0;
    }
}
</style>

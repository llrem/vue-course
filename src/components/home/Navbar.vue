<template>
    <div class="nav">
        <el-avatar>
            <img src="../../assets/moon.png" alt="user"/>
        </el-avatar>
        <div class="option">
            <router-link to="/home"><a>我的课程</a></router-link>/
            <router-link to="/notice"><a>通知</a></router-link>/
            <router-link to="/homework"><a>作业</a></router-link><label v-if="role==='admin'">/</label>
            <router-link to="/archive" v-if="role==='admin'"><a>归档课程</a></router-link>
            <router-link to="/login"><a class="out" @click="logout">退出</a></router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        data(){
            return{
                role:this.$store.getters.getRole,
            }
        },
        methods:{
            logout(){
                this.$store.commit("REMOVE_INFO")
            }
        }
    }
</script>

<style lang="scss" scoped>
    .nav{
        background-color: #304156;
        color: white;
        .el-avatar{
            float: left;
            margin: 13px 0 13px 25px;
        }
        .option{
            padding: 23px 30px;
        }
        .out{
            float: right;
            padding: 0;
        }
        a{
            color: white;
            font-weight: 300;
            padding: 0 15px;
            font-family:"Microsoft YaHei",serif;
            text-decoration: none;
            &:visited{
                color: #333333;
            }
        }
    }
</style>

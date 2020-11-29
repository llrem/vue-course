<template>
    <div class="nav">
        <el-avatar>
            <img src="../../assets/moon.png" alt="user"/>
        </el-avatar>
        <div class="option">
            <a>我的课程</a>/
            <a>通知</a>/
            <a>作业</a>
            <a class="out">loginOut</a>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Navbar",
        data(){
            return{

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
            margin: 13px 20px;
        }
        .option{
            padding: 23px 30px;
        }
        .out{
            float: right;
            padding: 0;
        }
        a{
            font-weight: 300;
            padding: 0 30px;
            font-family:"Microsoft YaHei",serif;
        }
    }
</style>

<template>
    <el-container>
        <el-header>
            <Navbar/>
        </el-header>
        <el-main>
            <router-view/>
        </el-main>
    </el-container>
</template>

<script>
    import Navbar from "../../components/home/Navbar";
    import CourseArea from "../../components/home/myCourse";

    export default {
        name: "index",
        components: {CourseArea, Navbar},
        data() {
            return{

            }
        },
    }
</script>

<style lang="scss" scoped>
    .el-container{
        height: 100%;
        background-color: #f7f5f9;
    }
    .el-main{
        padding:40px 0 0 50px;
    }
    .el-header{
        padding: 0;
        font-size: 15px;
        height: 65px !important;
        overflow: hidden;
        box-shadow: 0 1px 3px rgba(0, 0, 0,0.2);
    }
</style>

<template>
    <el-container>
        <el-header>
            <Navbar/>
        </el-header>
        <el-main>
            <courseArea/>
        </el-main>
    </el-container>
</template>

<script>
    import Navbar from "../../components/main/Navbar";
    import CourseArea from "../../components/main/courseArea";

    export default {
        name: "index",
        components: {CourseArea, Navbar}
    }
</script>

<style lang="scss" scoped>
    .el-container{
        height: 100%;
        background-color: #f7f5f9;
    }
    .el-main{

    }
    .el-header{
        padding: 0;
        font-size: 15px;
        height: 65px !important;
        overflow: hidden;
        box-shadow: 0 1px 3px rgba(0, 0, 0,0.2);
    }
</style>

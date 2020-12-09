<template>
    <el-container>
        <el-aside width="210px">
            <welcome/>
        </el-aside>
        <el-container>
            <el-header>
                <Navbar/>
            </el-header>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import Welcome from "../../components/course/Sidebar";
    import Navbar from "../../components/course/Navbar";

    export default {
        name: "index",
        components:{
            Navbar,
            Welcome
        }
    }
</script>

<style lang="scss" scoped>
.el-container{
    width: 100%;
    height: 100%;
}
.el-aside{
    background-color: #304156;
    overflow: hidden;
}
.el-header{
    height: 55px !important;
    padding: 20px;
    overflow: hidden;
    box-shadow:0 1px 3px rgba(0, 0, 0, 0.2);
}
</style>

<template>
    <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-menu-item index="1">
            <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">课程</span>
            </template>
        </el-menu-item>
        <el-menu-item index="2">
            <i class="el-icon-chat-round"></i>
            <span slot="title">通知</span>
        </el-menu-item>
        <el-submenu index="3">
            <template slot="title">
                <i class="el-icon-document"></i>
                <span slot="title">作业</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="1-1">查看提交的作业</el-menu-item>
                <el-menu-item index="1-2">录入成绩</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="4">
            <i class="el-icon-folder"></i>
            <span slot="title">文件</span>
        </el-menu-item>
        <el-menu-item index="5" class="close">
            <i class="el-icon-circle-close"></i>
            <span slot="title">结束课程</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "Sidebar",
        data(){
            return{

            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style lang="scss">
$menuBg:#304156;
$menuHover:#263445;
$subMenuBg:#1f2d3d;
$subMenuHover:#001528;

.el-menu{
    width: 100%;
}

.el-menu-item{
    background-color: $menuBg;
    color: white;
    i{color: white;}
    &:hover{
        background-color: $menuHover;
    }
}
.close{
    &:hover{
        background-color: crimson;
    }
}
.el-menu-item.close.is-active{
    color: white;
    background-color: crimson;
}
.el-menu-item.is-active{
    background-color: $menuHover;
}

.el-submenu{
    background-color: $menuBg;
    .el-menu-item{
        background-color: $subMenuBg;
        &:hover{
            background-color:$subMenuHover;
        }
    }
    .el-submenu__title{
        color: white;
        i{color: white;}
        &:hover{
            background-color: $menuHover;
        }
    }
    .el-menu-item-group__title{
        padding: 0;
    }
}
</style>

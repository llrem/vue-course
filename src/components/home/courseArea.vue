<template>
    <div class="courseCards">
        <el-row>
            <el-col :span="5" v-for="(o, index) in cardNumber" :key="o" :offset="index===cardNumber-1?2:1">
                <el-card :body-style="{ padding: '0px' }">
                    <router-link v-if="index<cardNumber-1" to="/course">
                        <div class="image" >
                            <div class="courseInfo">
                                <a>操作系统</a>
                            </div>
                        </div>
                    </router-link>
                    <div v-if="index===cardNumber-1&&role==='admin'" :plain="true" @click="addCourse">
                        <div class="image" >
                            <div class="courseInfo">
                                <i class="el-icon-circle-plus-outline"></i>
                                <p>添加课程</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="notice">

                        </div>
                        <div class="operation">

                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "courseArea",
        data() {
            return {
                cardNumber:3,
                role:this.$route.query.role,
            };
        },
        methods:{
            addCourse() {
                this.$message({
                    showClose: true,
                    message:'暂时还不能添加',
                    type:'warning'
                })
            },
        },
        mounted() {
            console.log(this.$route.query.role)
        }
    }
</script>

<style lang="scss" scoped>
.el-col-5{
    width: 260px;
    height:120px;
}
.el-card{
    border:none;
    border-radius: 15px;
}
.el-col-offset-1{
    margin:0 40px 160px 0;
    .image{
        font-size: larger;
        overflow: hidden;
        width: 100%;
        height: 120px;
        background-size: cover;
        background-image: url("../../assets/book.png");
    }
    .notice{
        width: 100%;
        height: 80px;
    }
    .operation{
        width: 100%;
        height: 33px;
        border-top: solid 1px lightgray;
    }
}
.el-col-offset-2{
    margin:0 40px 160px 0;
    .image{
        font-size: larger;
        overflow: hidden;
        width: 100%;
        height: 234px;
        background-size: cover;
        .courseInfo{
            padding: 45px 80px;
            i{
                color: lightgray;
                font-size: 100px;
            }
            p{
                margin: 0;
                color: lightgray;
                font-size: 25px;
            }
        }
    }
}
.courseInfo{
    padding: 20px;
}
a{
    text-decoration: none;
    &:visited{
        color: #333333;
    }
}
</style>

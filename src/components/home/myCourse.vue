<template>
    <div class="courseCards">
        <el-row>
            <el-col :span="5" v-for="(o, index) in cardNumber" :key="o" :offset="index===cardNumber-1?2:1">
                <el-card :body-style="{ padding: '0px' }">
                    <div v-if="index<cardNumber-1" class="image" @click="enterCourse(courses[index].name)">
                        <div class="courseInfo">
                            <a style="font-size: 22px">{{courses[index].name}}</a><br>
                            <a style="font-size: 15px">{{courses[index].className}}</a>
                        </div>
                    </div>
                    <div v-if="index===cardNumber-1&&role==='admin'" :plain="true">
                        <div class="image" @click="dialogFormVisible=true">
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

        <el-dialog title="添加课程" :visible.sync="dialogFormVisible" width="400px">
            <el-form :model="form" class="addCourse">
                <el-form-item label="课程名称">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="班级">
                    <el-input v-model="form.classId" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="学分">
                    <el-input v-model="form.credit" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="课时">
                    <el-input v-model="form.classHour" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addCourse()">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "courseArea",
        data() {
            return {
                courses:[],
                cardNumber:'',
                courseName:'',
                role:this.$store.getters.getRole,
                form:{
                    name:'',
                    classId:'',
                    credit:'',
                    classHour:''
                },
                dialogFormVisible:false
            };
        },
        methods:{
            addCourse(){
                const userInfo = sessionStorage.getItem("userInfo")

                this.$http.post('http://localhost:8081/home/addCourse',{
                    courseInfo:this.form,
                    admin:JSON.parse(userInfo)
                }).then((response) => {
                    console.log(response.data.data)
                    this.$router.go(0)
                })
                this.dialogFormVisible = false
            },
            enterCourse(name){
                this.$router.push({name:'courseInfo',params:{'name':name}})
            }
        },
        created() {
            const userInfo = sessionStorage.getItem("userInfo")
            const role = sessionStorage.getItem("role")
            const _this = this
            this.$http.post('http://localhost:8081/home/'+role,JSON.parse(userInfo)).then((response) => {
                _this.courses=response.data.data;
                _this.cardNumber=_this.courses.length+1;
                console.log(_this.courses);
            })
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
.el-form{
    position: unset;
    padding: 0;
    margin: 0;
    width: 100%;
    .el-form-item{
        margin: 0;
    }
}
a{
    text-decoration: none;
    &:visited{
        color: #333333;
    }
}
</style>

<style lang="scss">
    .el-dialog{
        .el-dialog__header{
            padding: 20px 20px 0 20px;
        }
        .el-dialog__body{
            padding: 10px 20px;
        }
        .el-dialog__footer{
            padding: 10px 20px 25px 0;
        }
        border-radius: 15px;
    }

</style>

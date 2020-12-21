<template>
    <div class="block">
        <el-timeline>
            <el-timeline-item v-for="(o,index) in noticeList" :content="o" :key="index" :timestamp = noticeList[index].date placement="top">
                <el-card>
                    <h4>{{noticeList[index].title}}</h4>
                    <p>{{noticeList[index].context}}</p>
                </el-card>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script>
    export default {
        name: "allNotice",
        data(){
            return{
                noticeList:[],
            }
        },
        created() {
            const userInfo = sessionStorage.getItem("userInfo")
            const role = sessionStorage.getItem("role")
            const _this = this
            this.$http.post('http://localhost:8081/notice/'+role,JSON.parse(userInfo)).then((response) => {
                console.log(response.data.data);
                _this.noticeList=response.data.data;
            })
        }
    }
</script>

<style lang="scss" scoped>
.block{
    .el-timeline{
        padding: 0;
    }
    width: 70%;
    margin:auto;
}
</style>

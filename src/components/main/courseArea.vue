<template>
    <div class="courseCards">
        <el-row>
            <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
                <el-card :body-style="{ padding: '0px' }">
                    <div class="image">
                        <a>操作系统</a>
                    </div>
                    <div style="padding: 14px;">
                        <span>好吃的汉堡</span>
                        <div class="">

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
                currentDate: new Date()
            };
        }
    }
</script>

<style lang="scss" scoped>
.el-row{
    padding: 15px;
}
.el-col{
    padding: 0;
    margin: 0;
}
.image{
    width: 270px;
    height: 150px;
    background-image: url("../../assets/sky.png");
}
</style>

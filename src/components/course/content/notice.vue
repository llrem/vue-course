<template>
    <el-form ref="form" :model="form">
        <el-form-item label="标题">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="内容">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "notice",
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                }
            }
        },
        methods:{
            onSubmit() {
                const date = new Date();
                const year = date.getFullYear();
                /* 在日期格式中，月份是从0开始的，因此要加0
                  * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
                  * */
                const month =
                    date.getMonth() + 1 < 10
                        ? "0" + (date.getMonth() + 1)
                        : date.getMonth() + 1;
                const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                alert(year+"-"+month+"-"+day)
            }
        }
    }
</script>

<style scoped>

</style>

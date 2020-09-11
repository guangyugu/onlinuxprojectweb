<template>
    <div>
        <router-link to="/">
            <el-button>返回首页</el-button>
        </router-link>
        <h1>新增用户</h1>
        <form style="width: 500px;margin-left: 700px">
            <el-input id="userName" placeholder="请输入姓名" clearable v-model="userBean.userName"></el-input>
            <el-input id="phoneNumber" placeholder="请输入电话" clearable v-model="userBean.phoneNumber"></el-input>
            <el-input id="address" placeholder="请输入地址" clearable v-model="userBean.address"></el-input>
            <el-input id="idCardNumber" placeholder="请输入身份证号" clearable v-model="userBean.idCardNumber"></el-input>
            <el-button @click="insertUser()">提交</el-button>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'
    import qs from 'qs'

    export default {
        name: "AddNewUser",
        data() {
            return {
                userBean: {
                    userName: '',
                    phoneNumber: '',
                    address: '',
                    idCardNumber: ''
                },
                notnullmessage: '',
            };
        },
        methods: {
            inputnotnull() {
                this.$message({
                    message: this.notnullmessage,
                    type: "error",
                    center: true
                });
            },
            insertSuccessMessage() {
                this.$message({
                    message: '新增成功！',
                    type: "success",
                    center: true
                });
            },
            insertUser() {
                if (document.getElementById("userName").value.length == 0) {
                    this.notnullmessage = '姓名不能为空';
                    this.inputnotnull();
                    return false
                }
                if (document.getElementById("phoneNumber").value.length == 0) {
                    this.notnullmessage = '手机号不能为空';
                    this.inputnotnull();
                    return false
                }
                if (document.getElementById("address").value.length == 0) {
                    this.notnullmessage = '地址不能为空';
                    this.inputnotnull();
                    return false
                }
                if (document.getElementById("idCardNumber").value.length == 0) {
                    this.notnullmessage = '身份证号不能为空';
                    this.inputnotnull();
                    return false
                }
                axios.post("/user/insert", qs.stringify(
                    this.userBean))
                    .then(response => {
                        console.log(response)
                        this.insertSuccessMessage();
                        this.$router.push({path: '/onlinux/userList'})
                    })
            }
        },
    }
</script>

<style scoped>
    el-form {
        margin-left: 500px;
    }
</style>

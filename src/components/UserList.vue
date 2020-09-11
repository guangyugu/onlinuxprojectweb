<template>
    <div id="UserList">
        <router-link to="/">
            <el-button>返回首页</el-button>
        </router-link>
        <router-link to="/onlinux/addnewuser">
            <el-button>新增用户</el-button>
        </router-link>
        <router-link to="/onlinux/upload">
            <el-button>测试上传</el-button>
        </router-link>
        <h1>用户列表</h1>
        <el-table
                :data="userList"
                stripe
                style="width: 100%">
            <el-table-column
                    prop="id"
                    label="序号" color>
            </el-table-column>
            <el-table-column
                    prop="userName"
                    label="姓名" color>
            </el-table-column>
            <el-table-column
                    prop="phoneNumber"
                    label="电话">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址">
            </el-table-column>
            <el-table-column
                    prop="idCardNumber"
                    label="身份证">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="testdigo(scope.row)">编辑
                    </el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="deleteUser()">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog :visible.sync="dialogFormVisible" width="500px">
            <h2>数 据 修 改</h2>
            <el-form>
                <el-form-item label="姓名" :label-width="formLabelWidth">
                    <el-input v-model="rows.userName" clearable></el-input>
                </el-form-item>
                <el-form-item label="电话" :label-width="formLabelWidth">
                    <el-input  v-model="rows.phoneNumber" clearable></el-input>
                </el-form-item>
                <el-form-item label="地址" :label-width="formLabelWidth">
                    <el-input  v-model="rows.address" clearable></el-input>
                </el-form-item>
                <el-form-item label="身份证号" :label-width="formLabelWidth">
                    <el-input  v-model="rows.idCardNumber" clearable></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="updateUser()">确 定</el-button>
            </div>
        </el-dialog>

        <!--    <ul v-for="(obj,index) in userList.name" :key="index">-->
        <!--        <li>{{obj}}</li>-->
        <!--    </ul>-->
    </div>
</template>

<script>
    import axios from "axios"
    import qs from "qs";

    export default {
        name: "UserList",
        data() {
            return {
                userList: {
                    id: "",
                    userName: '',
                    phoneNumber: '',
                    address: '',
                    idCardNumber: ''
                },
                dialogFormVisible: false,
                formLabelWidth: '68px',
                rows: []
            }
        },
        created() {
            this.getUser();
        },
        methods: {
            getUser() {
                axios.get("/user/userList").then(response => {
                    this.userList = response.data
                })
            },
            testdigo(row) {
                console.log(row);
                this.rows = row;
                console.log(this.rows.userName);
                this.dialogFormVisible = true;
                this.userIndex = this.userList.id;
            },
            updateUser() {
                console.log(this.rows);
                axios.post("/user/update", qs.stringify(
                    this.rows)
                ).then(response => {
                    this.dialogFormVisible = false
                    console.log(response);
                })
            },
            // gotoinsert(){
            //     this.$router.push({path: '/addnewuser',params:this.userList});
            // }
        }
    }
</script>

<style scoped>
</style>

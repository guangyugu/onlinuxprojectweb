<template>
    <div id="Home">
        <h1>主页</h1>
        <router-link to="/onlinux/userList">
            <el-button>人员列表</el-button>
        </router-link>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Home",
        created() {
            this.getUser();
        },
        methods: {
            getUser() {
                axios.get("/casTest").then(response => {
                    console.log(response);
                })
            },
        }
    }
</script>

<style scoped>

</style>

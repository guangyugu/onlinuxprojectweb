import VueRouter from "vue-router";
import Vue from "vue";
import UserList from "@/components/UserList";
import AddNewUser from "@/components/AddNewUser";
import uploadTest from "@/components/uploadTest";
import Home from "@/components/Home";
// 1,安装插件
Vue.use(VueRouter)
// 2,配置路径并导出
export default new VueRouter({
    routes:[
        {
            path:'/onlinux/userList',
            name:'userList',
            component:UserList
        },
        {
            path:'',
            redirect:'onlinux/home'
        },
        {
            path:'/onlinux/home',
            component: Home
        },
        {
            path:'file/upload',
            component:uploadTest
        },
        {
            path:'/onlinux/addnewuser',
            component:AddNewUser
        },
        {
            path:'/onlinux/upload',
            component:uploadTest
        },
    ],
    mode:'history'
});

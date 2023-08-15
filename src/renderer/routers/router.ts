import LoginPage from "../pages/LoginPage.vue";
import {createRouter, createWebHashHistory} from "vue-router";
import InstructPage from "../pages/InstructPage.vue";

const routes = [
    {path: '/', component: LoginPage},
    {path: '/instruct', component: InstructPage},
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})


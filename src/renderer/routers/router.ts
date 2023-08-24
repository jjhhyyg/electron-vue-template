import LoginPage from "../pages/LoginPage.vue";
import {createRouter, createWebHashHistory} from "vue-router";
import InstructPage from "../pages/InstructPage.vue";
import HomePage from "../pages/HomePage.vue";

const routes = [
    {path: '/', component: LoginPage},
    {path: '/instruct', component: InstructPage},
    {path: '/home', component: HomePage},
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})


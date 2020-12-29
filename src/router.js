import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {//디폴트 url 라우팅
            path: "/", 
            component: Home
        }, 
        {// /about 라우팅
            path: "/about",
            component: About
        }
    ]
});

export default router

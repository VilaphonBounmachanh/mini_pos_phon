import { createWebHistory, createRouter} from "vue-router";


import Store from "../Pages/Store.vue"
import Home from "../Pages/Home.vue"
import Pos from "../Pages/Pos.vue"
import Transection from "../Pages/Transection.vue"
import Report from "../Pages/Report.vue"

export const routes = [
    {
        name:"Store Page",
        path:"/store",
        component: Store
    },
    {
        name:"Pos Page",
        path:"/pos",
        component: Pos
    },
    {
        name:"Home Page",
        path:"/home",
        component: Home
    },
    {
        name:"Report Page",
        path:"/report",
        component: Report
    },
    {
        name:"Transection",
        path:"/transection",
        component: Transection
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes: routes,
    scrollBehavior(){
        window.scrollTo(0,0);
    }
});

export default router;
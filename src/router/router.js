/**
 * Created by Administrator on 2017/7/12 0012.
 */

import vue from 'vue'
import vueRouter from 'vue-router'
vue.use(vueRouter);

import detail from '../components/detail.vue'
import index from '../components/slid_list.vue'

const routes = [
    {
        name:'index',
        path:'/',
        component:index
    },
    {
        name:'details',
        path:'/details',
        component:detail
    }
];
export default new vueRouter({
    routes // （缩写）相当于 routes: routes
})
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource);
import VueSwiper from 'vue-awesome-swiper'
Vue.use(VueResource);
Vue.use(VueSwiper);
import App from './App.vue'
import store from './vuex/store'

new Vue({
    store,
    el: '#app',
    components:{
      'app':App
    }
})

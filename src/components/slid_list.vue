<template>
    <div>
        <headers></headers>
        <!--首页轮播图-->
        <slide></slide>
        <!--内容部分-->
        <lists></lists>
    </div>

</template>

<script>
    import slide from './slide.vue'
    import lists from './list.vue'
    import headers from './header.vue'
    export default {
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components:{
            lists, slide, headers,
        },
    }
</script>

<style>
</style>

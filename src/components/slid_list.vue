<template>
    <div>
        <!--首页轮播图-->
        <slide></slide>
        <!--内容部分-->
        <lists></lists>
    </div>

</template>

<script>
    import slide from './slide.vue'
    import lists from './list.vue'
    export default {
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components:{
            slide,lists
        },
    }
</script>

<style>
</style>

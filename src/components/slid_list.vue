<template>
    <div>
        <headers @showT="showT"></headers>
        <!--首页轮播图-->
        <slide></slide>
        <!--内容部分-->
        <lists></lists>

        <topic-list v-if="showTopic" @showT="showT"></topic-list>
    </div>

</template>

<script>
    import slide from './slide.vue'
    import lists from './list.vue'
    import headers from './header.vue'
    import topicList from './topic-list.vue'
    export default {
        data () {
            return {
                showTopic: false
            }
        },
        components:{
            lists, slide, headers, topicList, 
        },
        created(){
            this.$store.dispatch('topicDaily', {_this: this})
        },
        methods:{
            showT(op){
                this.showTopic = op
            }
        }
    }
</script>

<style>
</style>

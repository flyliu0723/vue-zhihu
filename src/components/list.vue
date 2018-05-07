<template>
    <div id="list">
        <container :scroll-load="load">
            <!-- <slide></slide> -->
            <div class="lists">
                <div class="list" v-for="(data,index) in con" :key="index">
                    <router-link :to="{name:'details',query:{id:data.id}}">
                        <list-block :data="data"></list-block>
                    </router-link>
                </div>
            </div>
        </container> 
    </div>

</template>

<script>
import container from './container.vue'
import slide from './slide.vue'
import listBlock from './list-block.vue'
    export default {
        data () {
            return {
                con:[]
            }
        },
        components:{
            container, slide, listBlock, 
        },
        created(){
            this.$store.dispatch('updateList', this)
                .then(d => {
                    this.con = this.$store.state.list.map(d => {
                        return {
                            id: d.id,
                            title: d.title,
                            picurl: d.images[0].replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
                        }
                    })
                })
        },
        methods:{
            load(){
                
            }
        },
        beforeRouteUpdate (to, from, next) {
            if(to.name=='details'){
                next()
            }
        },
    }
</script>

<style lang="scss" scoped>
    #list{
        width: 100%;
        height: auto;
        position: absolute;
        left:0;
        .lists{
            width: 100%;
            height: auto;
            .list{
                width: 95%;
                height: 1rem;
                background: white;
                position: relative;
                left: 0.1rem;
                right: 0.1rem;
                border: solid 1px #fafafa;
                border-radius: 0.1rem;
                margin-top: 0.04rem;
                overflow: hidden;
            }
        }
    }
    
    
</style>

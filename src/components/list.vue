<template>
    <div id="list">
        <container :scroll-load="load">
            <div class="list" v-for="(data,index) in con" :key="index">
                <router-link :to="{name:'details',query:{id:data.id}}">
                    <div class="intro-title">
                        {{data.title}}
                    </div>
                    <div class="img">
                        <img :src="data.images[0]">
                        <!-- <image :src="data.images[0]"></image> -->
                    </div>
                </router-link>
            </div>

        </container> 
        
    </div>

</template>

<script>
import container from './container.vue'
    export default {
        data () {
            return {
                con:[]
            }
        },
        components:{
            container,
        },
        created(){
            const _this = this;
            this.$http.jsonp('http://localhost:4567?url=http://news-at.zhihu.com/api/4/news/latest')
                    .then(function (res) {
                        _this.con = res.body.stories
                    })
        },
        methods:{
            load(){
                console.log(666);
                
            }
        },
        beforeRouteUpdate (to, from, next) {
            if(to.name=='details'){
                next()
            }
        },
    }
</script>

<style>
    #list{
        width: 100%;
        height: auto;
        position: absolute;
        /* margin-top: 2.3rem; */
        left:0;
    }
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
    .intro-title{
        width:2.5rem;
        height: 100%;
        margin-top: 0.1rem;
        margin-bottom: 0.1rem;
        margin-left: 0.05rem;
        float: left;
        font-size: 0.13rem;
        text-align: left;
        color: #333333
    }
    .img{
        width: 0.8rem;
        height: 100%;
        margin-top: 0.05rem;
        margin-bottom: 0.05rem;
        float: left;
        margin-left: 0.1rem;
    }
    .img image{
        width: 0.8rem;
        height: 0.8rem;
    }
    .img img{
        width: 0.8rem;
        height: 0.8rem;
    }
</style>

<template>
    <div id="list">
        <div class="list" v-for="data in con">
            <router-link :to="{name:'details',query:{id:data.id}}">
                <div class="intro-title">
                    {{data.title}}
                </div>
                <div class="img">
                    <img :src="data.images[0]">
                    <image :src="data.images[0]"></image>
                </div>
            </router-link>

        </div>

    </div>

</template>

<script>
    export default {
        data () {
            return {
                con:[]
            }
        },
        created(){
            const _this = this;
            this.$http.jsonp('http://localhost:4567?url=http://news-at.zhihu.com/api/4/news/latest')
                    .then(function (res) {
//                        console.log(res.body);
                        _this.con = res.body.stories

                    })
        },
        methods:{

        },
        beforeRouteUpdate (to, from, next) {
            console.log(to)
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
        margin-top: 2.3rem;
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
        margin-top: 0.1rem;
    }
    .intro-title{
        width:2.5rem;
        height: 100%;
        margin-top: 0.05rem;
        margin-bottom: 0.05rem;
        margin-left: 0.05rem;
        float: left;
        font-size: 0.22rem;
        text-align: left;
    }
    .img{
        width: 1rem;
        height: 100%;
        margin-top: 0.05rem;
        margin-bottom: 0.05rem;
        float: left;
    }
    .img image{
        width: 0.9rem;
        height: 0.9rem;
    }
    .img img{
        width: 0.9rem;
        height: 0.9rem;
    }
</style>

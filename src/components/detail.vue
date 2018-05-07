<template>
    <div id="detail">
        <div class="detail-header">
            <span class="back" @click="back"></span>
        </div>

        <div class="banner">
            <span class="title">{{ title }}</span>
            <span class="mask"></span>
            <img :src="banner">

            
        </div>

        <div v-html="body" class="detail"></div>
    </div>
    
</template>

<script>
    export default {
        data () {
            return {
                body:'',
                css:'',
                banner:'',
                title: ''
            }
        },
        created(){
            this.$store.dispatch('dailyDetail', {_this: this, id: this.$route.query.id})
                .then(d => {
                    this.body = this.$store.state.dailyDetail.body.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
                    this.css = this.$store.state.dailyDetail.css[0]
                    this.banner = this.$store.state.dailyDetail.image.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
                    this.title = this.$store.state.dailyDetail.title
                    var obj = document.getElementById("detailcss");
                        obj.setAttribute("href",this.css);
                })
        },
        methods:{
            /**@description 返回首页 */
            back(){
                this.$router.replace({name:'index'})
            }
        }
    }
</script>

<style lang="scss">
#detail{
    width: 100%;
    .detail-header{
        width: 100%;
        height: 0.45rem;
        background: #7879ff;
        .back{
            width: 0.3rem;
            height: 0.3rem;
            background: #ffffff;
            display: inline-block;
            margin: 0.08rem 0 0 0.1rem;
            float: left;
        }
    }
    .banner{
        width: 100%;
        height: 2.5rem;
        overflow: hidden;
        .title{
            position: absolute;
            display: inline-block;
            width: 3.4rem;
            font-size: 0.18rem;
            color: #fff;
            top: 2.3rem;
            left: 0.1rem;
            text-align: left;
            z-index: 10;
        }
        .mask{
            width: 100%;
            height: 2.5rem;
            display: inline-block;
            background: rgba($color: #000000, $alpha: 0.2);
            position: absolute;
        }
        img{
            width: 100%;
        }
    }
    .detail{
        z-index: 10;
        text-align: left;
        .img-place-holder{
            height: 0 !important;
        }
    }
}  
</style>

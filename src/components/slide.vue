<template>
    <div id="slide">
        <slide-banner :banners="banners" @active-slide="goDetail"></slide-banner>
    </div>
</template>

<script>
    import slideBanner from './slide-banner.vue'
    export default {
        data () {
            return {
               
            }
        },
        computed: {
            banners(){
                return this.$store.state.banner.map(d => {
                    return {
                        picurl: d.image.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p'),
                        id: d.id
                    }
                })
            }
        },
        components: {
            slideBanner, 
        },
        methods:{
            goDetail(i){
                this.$router.push({name: 'details', query: {id: this.banners[i].id}})
            }
        }
    }
</script>

<style>
    #slide{
        width: 100%;
        height: 2.2rem;
        margin-top: 0.4rem;
    }
</style>

<template>
    <div id="list">
        <container :scroll-load="load">
            <div class="lists">
                <template v-for="datas in con">
                    <span class="title">{{ datas.title }}</span>
                    <div class="list" v-for="(data,index) in datas.data">
                        <router-link :to="{name:'details',query:{id:data.id}}">
                            <list-block :data="data"></list-block>
                        </router-link>
                    </div>
                </template>
                
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
                con:[],
                now: 0,
                year: 0,
                month: 0,
                day: 0,
                canLoad: true
            }
        },
        components:{
            container, slide, listBlock, 
        },
        created(){
            this.now = new Date();
            this.$store.dispatch('updateList', this)
                .then(d => {
                    this.con = this.$store.state.list
                })
        },
        methods:{
            /**@description 滚动加载 */
            load(){
                if(this.canLoad){
                    this.canLoad = false
                    //获取前一天日期
                    this.now.setTime(this.now.getTime() - 24*60*60*1000)
                    this.year = this.now.getFullYear()
                    this.month = this.now.getMonth() + 1
                    this.day = this.now.getDate();
                    this.$store.dispatch('updateMoreList', 
                        {
                            _this: this, 
                            date: `${this.year}-${this.addZero('month', this.month)}-${this.addZero('day', this.day)}`
                        }
                    )
                    .then(d => {
                        this.canLoad = true
                    })
                }
            },
            /**@description 日期加0 */
            addZero(type, num){
                if(type === 'month'){
                    return num >= 1 && num <= 9 ? "0" + num : num
                }else{
                    return num >= 0 && num <= 9 ? "0" + num : num
                }
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
            background: #f8f8f8;
            .title{
                font-size: 0.16rem;
                color: #333333;
                float: left;
                margin: 0.15rem 0 0.1rem 0.1rem;
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
        }
    }
    
    
</style>

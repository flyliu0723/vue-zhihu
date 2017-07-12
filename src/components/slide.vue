<template>
    <div id="slide">
        <!--<img src="https://pic3.zhimg.com/v2-e7093b89520ce137c34481a1cb917122.jpg" alt="aa">-->
        <!--<image src="https://pic3.zhimg.com/v2-e7093b89520ce137c34481a1cb917122.jpg"></image>-->
        <swiper :options="swiperOption"  ref="mySwiper">
            <!-- 这部分放你要渲染的那些内容 -->
            <swiper-slide v-for="item in banners">
                <img :src="item">
            </swiper-slide>
            <!-- 这是轮播的小圆点 -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        components: {
            swiper,
            swiperSlide
        },
        data () {
            return {
                banners: [ 'https://pic3.zhimg.com/v2-e7093b89520ce137c34481a1cb917122.jpg', 'https://pic3.zhimg.com/v2-e7093b89520ce137c34481a1cb917122.jpg', 'https://pic3.zhimg.com/v2-e7093b89520ce137c34481a1cb917122.jpg' ],
                swiperOption: {
                    //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                    notNextTick: true,
                    pagination: '.swiper-pagination',
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    paginationClickable: true,
                    spaceBetween: 30,
                    loop:true,
                    onSlideChangeEnd: swiper => {
                        //这个位置放swiper的回调方法
                        this.page = swiper.realIndex+1;
                        this.index = swiper.realIndex;
                    }
                }
            }
        },
        mounted(){
            //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
            this.swiper.slideTo(0, 0, false);
        },
        //定义这个sweiper对象
        computed: {

            swiper() {
                return this.$refs.mySwiper.swiper;
            }
        },
    }
</script>

<style>
    #slide{
        width: 100%;
        height: auto;
        position: absolute;
        left: 0;
        right: 0;
        margin-top: 0.18rem;
    }
    #slide img{
        width: 100%;
        height: 2rem;
    }
</style>

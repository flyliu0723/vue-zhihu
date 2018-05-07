<template>
    <div 
        class="index_slide" 
        v-if="banners && banners.length>0" 
        @touchstart="touchStart" 
        @touchmove="touchMove" 
        @touchend="touchEnd"
    >
        <ul 
            :style="ulStyle" 
            class="banners"
        >
            <li>
                <img :src="banners[left].picurl" >
            </li>
            <li @click="active">
                <img :src="banners[current].picurl">
            </li>
            <li>
                <img :src="banners[right].picurl" >
            </li>
        </ul>
        <div 
            class="dots" 
            :style="pointerBoxStyle"
        >
            <i 
                v-for="(b,i) in banners" 
                :class="{active: i == current}" 
                :style="[pointerStyle, i == current && pointerActiveStyle]"
            />
        </div>
    </div>
</template>

<script>
export default {
    props: ['banners', 'pointerBoxStyle', 'pointerStyle', 'pointerActiveStyle', 'changeTime'],
    data() {
        return {
            needX: 150, // px
            needSpeed: 0.4,
            current: 0,
            interval: null,
            startPoint: null,
            isTouching: false,
            ulStyle: {
                transform: 'translate3d(-100%, 0, 0)',
                transitionProperty: 'transform',
                transitionDuration: '0s'
            },
            state: true,
            ifFn: true,
            time: 5000
        }
    },
    computed: {
        left() {
            return this.current == 0 ? this.banners.length - 1 : this.current - 1
        },
        right() {
            return this.current == this.banners.length - 1 ? 0 : this.current + 1
        }
    },
    methods: {
        active() {
            this.$emit('active-slide', this.current)
        },
        touchStart($event) {
            this.isTouching = true
            window.clearInterval(this.interval)
            this.startPoint = {
                screenX: $event.changedTouches[0].screenX,
                screenY: $event.changedTouches[0].screenY,
                clientX: $event.touches[0].clientX,
                clientY: $event.touches[0].clientY,
                timestamp: Date.now(),
            }
            this.ulStyle.transitionDuration = '0s'
            this.state = true
            this.ifFn  = true
        },
        numInt(x, y) {
            var n
            y === undefined ? n = x : n = x - y
            return parseInt(n.toString().replace('-', ''))
        },
        touchMove($event) {
            if(this.ifFn){
                if(this.numInt(event.touches[0].clientX, this.startPoint.clientX) >= this.numInt( event.touches[0].clientY, this.startPoint.clientY)){
                    this.state = true
                    $event.preventDefault()
                }else {
                    this.state = false
                }
                this.ifFn = false
            }else{
                if(this.state){
                    $event.preventDefault()
                    let moveX = $event.changedTouches[0].screenX - this.startPoint.screenX
                    this.ulStyle.transform = `translate3d(calc(-100% + ${moveX}px), 0, 0)`
                }else{
                    return
                }
            }
        },
        touchEnd($event) {
            if(!this.state){
                return
            }
            this.state = true
            this.ifFn = true
            let moveX = $event.changedTouches[0].screenX - this.startPoint.screenX
            let speed = moveX / (Date.now() - this.startPoint.timestamp)
            this.ulStyle.transitionDuration = '0.3s'

            if (moveX > this.needX || speed > this.needSpeed) {
                this.ulStyle.transform = 'translate3d(0, 0, 0)'

                setTimeout(() => {
                    this.current = this.left
                    this.ulStyle.transitionDuration = '0s'
                    this.ulStyle.transform = 'translate3d(-100%, 0, 0)'
                    this.isTouching = false
                    this.setInterval()
                }, 300)
            } else if (moveX < -(this.needX) || speed < -(this.needSpeed)) {
                this.ulStyle.transform = 'translate3d(-200%, 0, 0)'

                setTimeout(() => {
                    this.current = this.right
                    this.ulStyle.transitionDuration = '0s'
                    this.ulStyle.transform = 'translate3d(-100%, 0, 0)'
                    this.isTouching = false
                    this.setInterval()
                }, 300)
            } else {
                this.ulStyle.transform = 'translate3d(-100%, 0, 0)'
                this.isTouching = false
                this.setInterval()
            }
        },
        setInterval() {
            if(this.changeTime && this.changeTime != ''){
                this.time = parseInt(this.changeTime)
            }
            this.interval = window.setInterval(() => {
                if (this.isTouching) {
                    return
                }
                this.ulStyle.transitionDuration = '0.3s'
                this.ulStyle.transform = 'translate3d(-200%, 0, 0)'

                setTimeout(() => {
                    this.current = this.right
                    this.ulStyle.transitionDuration = '0s'
                    this.ulStyle.transform = 'translate3d(-100%, 0, 0)'
                }, 300)
            }, this.time)
        }
    },
    mounted() {
        this.setInterval()
    }
}
</script>

<style lang="scss">
    .index_slide {
        width: 100%;
        position: relative;
        overflow: hidden;
        font-size: 0;
        background-color: #fff;
        padding-top: 53.333333%;
        .banners {
            white-space: nowrap;
            width: 100%;
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            li {
                display: inline-block;
                width: 100%;
                height: 100%;
                img {
                    width: 100%;
                    // height: 100%;
                }
            }
        }
        .dots {
            position: absolute;
            bottom: 0.1rem;
            text-align: center;
            width: 100%;
            i {
                display: inline-block;
                width: 0.05rem;
                height: 0.05rem;
                border: 1px solid #fff;
                border-radius: 0.03rem;
                margin:0 0.05rem;
                box-sizing: border-box;
                transition: width 0.2s linear;
                &.active {
                    width: 0.1rem;
                    background-color: #fff;
                }
            }
        }
    }
</style>

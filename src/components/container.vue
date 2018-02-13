<template>
    <div>
        <div style="height:0.48rem;width:100%;background: #cbcbcb"></div>
        <div class="content-container" @touchstart="touchStart($event)" @touchmove="touch($event)" @mousewheel="wheel($event)">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['scrollLoad'],
        data() {
            return {
                isScrollLoading: false,
                touchStartY: 0
            }
        },
        methods: {
            touchStart($event) {
                this.touchStartY = $event.changedTouches[0].screenY;
            },
            async load() {
                let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                if (scrollHeight - (scrollTop + window.innerHeight) < 20) {
                    this.isScrollLoading = true; // 避免多次加载
                    this.scrollLoad && await this.scrollLoad();
                    this.isScrollLoading = false; // 数据加载完恢复
                }

            },
            touch($event) {
                // 向上滑动距离小于20不触发加载
                if (this.isScrollLoading || ($event.changedTouches[0].screenY + 20) > this.touchStartY) {
                    return ;
                }
                this.load();
            },
            wheel($event) {
                if (this.isScrollLoading || $event.deltaY < 0) {
                    return ;
                }
                this.load();
            }
        }
    }
</script>
<style scoped>
.content-container {
    width: 100%;
    box-sizing: border-box;
}
</style>

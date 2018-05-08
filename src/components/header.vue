<template>
    <div id="header">
        <span class="category" @click="showTopic"></span>
        <span class="title">首页</span>
        <span class="bell"></span>
        <span class="three"></span>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        methods:{
            showTopic(){
                this.$emit('showT', true)
            }
        }
    }
</script>

<style lang="scss" scoped>
    #header{
        background: #7879ff;
        position: fixed;
        top:0;
        left: 0px;
        right: 0;
        height: 0.48rem;
        z-index: 10;
        span{
            display: inline-block;
            float: left;
        }
        .category{
            background: url("../assets/Category.png") no-repeat;
            background-size: 100% 100%;
            width: 0.22rem;
            height: 0.22rem;
            position: relative;
            margin-top: 0.13rem;
            margin-left: 0.18rem;
        }
        .title{
            font-size: 0.14rem;
            color: white;
            position: relative;
            margin-top: 0.13rem;
            margin-left: 0.18rem;
        }
        .bell{
            background: url("../assets/bell.png") no-repeat;
            background-size: 100% 100%;
            width: 0.22rem;
            height: 0.22rem;
            position: absolute;
            right: 0.68rem;
            margin-top: 0.13rem;
        }
        .three{
            background: url("../assets/three.png") no-repeat;
            background-size: 100% 100%;
            width: 0.22rem;
            height: 0.22rem;
            position: absolute;
            right: 0.18rem;
            margin-top: 0.13rem;
        }
    }
    
</style>


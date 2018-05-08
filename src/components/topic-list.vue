<template>
    <div id="topicList" @click="showT">
        <div class="list-con" @click.stop="">
            <div class="user-mess">
                <img src="../assets/logo.png">
                <span>189****7507</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data(){
      return {

      }
  },
  methods:{
      showT(){
          this.$emit('showT', false)
      }
  }
}
</script>
<style lang="scss" scoped>
#topicList{
    position: fixed;
    width: 100%;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 20;
    .list-con{
        position: fixed;
        width: 80%;
        top: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 1);
        .user-mess{
            width:100.01%;
            height: 1.5rem;
            background: #7879ff;
            line-height: 1.5rem;
            img{
                width: 0.3rem;
                height: 0.3rem;
                border-radius: 50%;
                margin-left: 0.1rem;
            }
            span{
                font-size: 0.13rem;
                color: #ffffff;
                position: absolute;
                display: inline-block;
                left: 0.5rem;
                top: -0.07rem;
            }
        }
    }
}
</style>

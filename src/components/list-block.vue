<template>
    <div id="block">
        <div class="intro-title">
            {{ data.title }}
        </div>
        <div class="img">
            <img :src="data.images[0] | re">
        </div>
    </div>
</template>
<script>
export default {
  props:['data'],
  filters: {
      re(val){
          return val.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
      }
  },
  watch:{
      data(n, o){
          console.log(n);
          
      }
  }
}
</script>
<style lang="scss" scoped>
#block{
    width: 100%;
    .intro-title{
        width:2.5rem;
        height: 100%;
        margin-top: 0.1rem;
        margin-bottom: 0.1rem;
        margin-left: 0.05rem;
        float: left;
        font-size: 0.15rem;
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
        img{
            width: 0.8rem;
            height: 0.8rem;
        }
    }
}
</style>

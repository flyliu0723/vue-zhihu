<template>
  <div id="topic">
    <div class="header">
      <span class="back" @click="back"></span>
      <span class="title">{{ detail.name }}</span>
    </div>
    <div class="banner">
      <img :src="backImg" alt="">
    </div>
    <div class="topic-list">
      <template v-for="st in detail.stories">
        <div class="list" @click="go(st.id)">
          <span>{{ st.title }}</span>
          <!-- <img :src=""> -->
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      topicId: this.$route.query.id,
      detail: '',
      backImg:''
    }
  },
  created(){
    this.$store.dispatch('topicDatail', {_this: this, id: this.topicId})
      .then(d => {
        this.detail = this.$store.state.topicDetail
        this.backImg = this.detail.background.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
      })
  },
  methods: {
    /**
     * @description 跳转详细文章页面
     * @param id 文章id
     */
    go(id){
      this.$router.push({name: 'details', query: {id: id}})
    },
    back(){
      this.$router.back();
    }
  }
}
</script>
<style lang="scss" scoped>
#topic{
    .header{
      width: 100%;
      position: fixed;
      top: 0;
      height: 0.48rem;
      line-height: 0.48rem;
      text-align: center;
      background: white;
      border-bottom: solid 1px #eee;
      .back{
        background: url(../assets/back.png) no-repeat;
        background-size: 100% 100%;
        display: inline-block;
        width: 0.22rem;
        height: 0.22rem;
        position: absolute;
        left: 0.11rem;
        top: 0.12rem;
      }
      .title{
        font-size: 0.14rem;
        color: #333;
      }
    }
    .banner{
      width: 100%;
      height: 3rem;
      overflow: hidden;
      img{
        width: 100%;
      }
    }
    .topic-list{
      width: 100%;
      height: auto;
      margin-top: 0.15rem;
      .list{
        width: 100%;
        height: 0.7rem;
        padding: 0.1rem 0.15rem;
        margin-top: 0.15rem;
        background: white;
        span{
          font-size: 0.14rem;
          color: #333;
        }
      }
    }
}
</style>

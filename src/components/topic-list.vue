<template>
    <div id="topicList">
        <div class="list-con" @click="showT">
            <div class="user-mess" @click="goMess">
                <img src="../assets/logo.png">
                <span>189****7507</span>
            </div>
            <div class="auto-scroll">
                <div class="lists">
                    <div class="list" v-for="topic in topicList" @click="goTopic(topic.id)">
                        {{ topic.name }}
                        <span></span>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
  data(){
      return {
          topicList: ''
      }
  },
  created(){
      this.$store.dispatch('topicDaily', {_this: this})
        .then(d => {
            this.topicList = this.$store.state.topicDaily
        })
  },
  methods:{
      /**@description 隐藏列表栏 */
      showT(){
          this.$emit('showT', false)
      },
      /**@description 个人信息 */
      goMess(){
          console.log(666);
          
      },
      /**@description 专题页 */
      goTopic(id){
        this.$router.push({name:'topic', query: {id: id}})
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
        display: inline-block;
        .user-mess{
            width:100.01%;
            height: 20%;
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
        .auto-scroll{
            width: 100%;
            height: 80%;
            overflow: hidden;
            position: absolute;
            .lists{
                overflow-x: hidden;
                overflow-y: auto;
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                bottom: 0;
                .list{
                    width: 90%;
                    height: 0.5rem;
                    border-bottom: solid 1px #eeeeee;
                    line-height: 0.5rem;
                    font-size: 0.14rem;
                    color: #333333;
                    margin-left: 0.15rem;
                    span{
                        display: inline-block;
                        width: 0.32rem;
                        height: 0.32rem;
                        background: url(../assets/right.png) no-repeat;
                        background-size: 100% 100%;
                        float: right;
                        margin-top: 0.1rem;
                        border-radius: 50%
                    }
                }
            }
        }
    }
    .white{
        display: inline-block;
        width: 19%;
        height: 100%;
        float: right
    }
}
</style>

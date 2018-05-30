<template>
  <div id="topic">
    
  </div>
</template>
<script>
export default {
  data(){
    return {
      topicId: this.$route.query.id,
      detail: ''
    }
  },
  created(){
    this.$store.dispatch('topicDatail', {_this: this, id: this.topicId})
      .then(d => {
        this.detail = this.$store.state.topicDetail
      })
  }
}
</script>
<style lang="scss" scoped>
#topic{
    
}
</style>

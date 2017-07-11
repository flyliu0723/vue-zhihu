<template>
  <div id="app">
    <!--头部-->
    <headers></headers>
    <!--首页轮播图-->
    <slide></slide>
    <!--内容部分-->
    <lists></lists>
  </div>
</template>

<script>
  import headers from './components/header.vue'
  import slide from './components/slide.vue'
  import lists from './components/list.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
    components:{
      headers,slide,lists
    },
  created(){
    this.$http.jsonp('http://localhost:4567?url=http://news-at.zhihu.com/api/4/news/latest')
            .then(function (res) {
              console.log(res.body)
            })
  }}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

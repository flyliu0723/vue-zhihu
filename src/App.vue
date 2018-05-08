<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
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
      slide,lists
    },
  created(){

  }}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin-top: 0.06rem;
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
  // margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

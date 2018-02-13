<template>
    <div v-html="body" class="detail" style="z-index: 10；text-align:left">

    </div>
</template>

<script>
    export default {
        data () {
            return {
                body:'',
                css:''
            }
        },
        created(){
            const _this = this;
            this.$http.jsonp('http://localhost:4567?url=http://news-at.zhihu.com/api/4/news/'+this.$route.query.id)
                    .then(function (res) {
                        _this.body = res.body.body;
                        _this.css = res.body.css[0];
                        var obj = document.getElementById("detailcss");
                        obj.setAttribute("href",_this.css);
                    })
        }
    }
</script>

<style>
    .detail{
        z-index: 10;
        text-align: left;
    }
    @import "{{css}}"
    
</style>


<template>
    <div>
        <input type="text" v-model="change">
        <input type="button" @click="changeCon(change)" value="change">
        <input type="button" @click="deleteCon" value="delete">
        {{getCon}}
        {{getSta}}
    </div>
</template>
<script>
    import {mapGetters,mapActions} from 'vuex'
    export default {
        data(){
            return {
                change:''
            }
        },
        computed: mapGetters([
                'getCon',
                'getSta'
            ]),
            /*da(){
                return this.$store.getters.getCon;
            }*/
        methods:{
            changeCon(data){
                this.$store.dispatch('changeCon',data)
            },
            deleteCon(){
                this.$store.dispatch('deleteCon')
            }
        }
    }
</script>
<style>

</style>
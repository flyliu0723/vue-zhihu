/**
 * Created by jishu50 on 2017/6/17.
 */
    import Vue from 'vue'
    import Vuex from 'vuex'
    Vue.use(Vuex);
    import * as actions from './actions'
    import * as getters from './getters'
    import mutations from './mutations'
    import createLogger from 'vuex/dist/logger'
    const state = {
        con:'1111',
        sta:'sdasd',
        list: [],
        banner: [],
        dailyDetail: '',
        topicDaily: '',
        topicDetail: ''
    };
    export default new Vuex.Store({
        state,
        mutations,
        actions,
        getters,
        plugins:[createLogger()]
    });
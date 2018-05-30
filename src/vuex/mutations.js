
/**
 * Created by jishu50 on 2017/6/19.
 */
import * as types from './mutations-types'

export default {
    [types.CHANGE_CON](state, message){
        state.con += message;
        state.sta = message;
    },
    [types.DELETE_CON](state){
        state.con = ''
    },

    [types.LIST_UPDATE](state, data){
        state.list.push({
            title: data.title,
            data: data.data
        })
    },
    [types.BANNER_UPDATE](state, data){
        state.banner = data
    },
    [types.DAILY_DETAIL](state, data){
        state.dailyDetail = data
    },
    [types.DAILY_TOPIC](state, data){
        state.topicDaily = data
    },
    [types.DETAIL_TOPIC](state, data){
        state.topicDetail = data
    }
}

/**
 * Created by jishu50 on 2017/6/17.
 */
import axios from 'axios'
export const changeCon = ({commit},data) => {
    commit('CHANGE_CON',data)
};
export const deleteCon = ({commit}) =>{
    commit('DELETE_CON')
};

/**
 * 
 * @param {*} param0 
 * @param {*} _this 
 * @description 获取最新的日报消息和头部热门
 */
export const updateList = async ({ commit }, _this) => {
    let isOk = await _this.$http.jsonp('http://localhost:4567?url=http://news-at.zhihu.com/api/4/news/latest')
        .then(d => {
            commit('LIST_UPDATE', d.body.stories)
            commit('BANNER_UPDATE', d.body.top_stories)
            return true
        },
        e => {
            return false
        })
    return isOk
}
export const dailyDetail = async ({ commit }, param) => {
    let isOk = await param._this.$http.jsonp(`http://localhost:4567?url=http://news-at.zhihu.com/api/4/news/${param.id}`)
        .then(d => {
            commit('DAILY_DETAIL', d.body)
            return true
        }, e=> {
            return false
        })
}


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
            commit('LIST_UPDATE', {title: '今日要闻', data: d.body.stories})
            commit('BANNER_UPDATE', d.body.top_stories)
            return true
        },
        e => {
            return false
        })
    return isOk
}
/**
 * @description 加载更多
 * @param {*} param0 
 * @param {*} param 
 */
export const updateMoreList = async ({ commit }, param) => {
    let isOk = await param._this.$http.jsonp(`http://localhost:4567?url=http://news.at.zhihu.com/api/4/news/before/${param.date.split('-').join('')}`)
        .then(d => {
            commit('LIST_UPDATE', {title: param.date, data: d.body.stories})
            return true
        },
        e => {
            return false
        })
    return isOk
}
/**
 * 
 * @param {*} param0 
 * @param {*} param 
 * @description 获取详情
 */
export const dailyDetail = async ({ commit }, param) => {
    let isOk = await param._this.$http.jsonp(`http://localhost:4567?url=http://news-at.zhihu.com/api/4/news/${param.id}`)
        .then(d => {
            commit('DAILY_DETAIL', d.body)
            return true
        }, e=> {
            return false
        })
        return isOk
}


export const topicDaily = async ({ commit }, param) => {
    let isOk = await param._this.$http.jsonp('http://localhost:4567?url=http://news-at.zhihu.com/api/4/themes')
        .then(d => {
            commit('DAILY_TOPIC', d.body.others)
            return true
        }, e => {
            return false
        })
        return isOk
}


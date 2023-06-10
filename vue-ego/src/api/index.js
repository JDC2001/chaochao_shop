import axios from "../utils/request"
import base from "./base"

const api = {
    /**
     * 注册
     */
    register(params){
        return axios.post(base.baseUrl + base.register,params)
    },
    /**
     * 登陆
     */
    login(params){
        return axios.post(base.baseUrl + base.login,params)
    },
    /**
     * 商品列表
     */
    selectTbItemAllByPage(params){
        return axios.get(base.baseUrl + base.selectTbItemAllByPage,{
            params
        })
    },
    /**
     * 商品总条数
     */
    total(){
        return axios.get(base.baseUrl + base.total)
    },
    /**
     * 模糊查询
     */
    search(params){
        return axios.get(base.baseUrl + base.search,{
            params
        })
    },
    /**
     * 类目选择
     */
    selectItemCategoryByParentId(params){
        return axios.get(base.baseUrl + base.selectItemCategoryByParentId,{
            params
        })
    },
    /**
     * 商品添加 
     */
    insertTbItem(params){
        return axios.get(base.baseUrl + base.insertTbItem,{
            params
        })
    },
    /**
     * 商品删除
     */
    deleteItemById(params){
        return axios.get(base.baseUrl + base.deleteItemById,{
            params
        })
    },
    /**
     * 预更新
     */
    preUpdateItem(params){
        return axios.get(base.baseUrl + base.preUpdateItem,{
            params
        })
    },
    /**
     * 商品修改
     */
    updateTbItem(params){
        return axios.get(base.baseUrl + base.updateTbItem,{
            params
        })
    },
    /**
     * 规格参数查询
     */
    selectItemParamAll(params){
        return axios.get(base.baseUrl + base.selectItemParamAll,{
            params
        })
    },
    /**
     * 规格参数模糊查询
     */
    paramsSearch(params){
        return axios.get(base.baseUrl + base.paramsSearch,{
            params
        })
    }
}

export default api;
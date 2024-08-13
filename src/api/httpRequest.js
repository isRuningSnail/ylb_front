import axios from "axios";
//设置默认值
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.timeout = 50000



/**
 * get请求方法
 * @param {*} url   url请求的地址 ，去掉baseURL以外的部分
 * @param {*} params 是对象，json对象。表示请求参数
 * @returns 
 */
function doGet(url,params){
    return axios({
        url:url,
        method:'get',
        params:params
    })
}

/**
 * post请求方法
 * 传递json数据，在请求报文中时json格式
 * @param {*} url  url请求的地址 ，去掉baseURL以外的部分
 * @param {*} params  是对象，json对象。表示请求参数
 * @returns 
 */
function doPost(url,params){
    return axios({
        url:url,
        method:'psot',
        params:params
    })
}

//导出，暴露这个函数。其他模块才能使用
export{
    doGet,
    doPost
}
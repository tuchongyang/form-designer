import axios, { AxiosResponse } from 'axios'
// const debug = process.env.NODE_ENV !== 'production';

import { message } from 'ant-design-vue';
/*axios 配置*/
// axios.defaults.timeout = 30000;
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 允许携带cookie
// axios.defaults.withCredentials = true;


/*http request拦截器*/
axios.interceptors.request.use(
    function(config) {

        let token = window.localStorage.getItem("token")
        if (token) {
            //将token放到请求头发送给服务器,将tokenkey放在请求头中
            config.headers.authorization = token;    
        }

        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);
// http response 拦截器
axios.interceptors.response.use(
    function(response: AxiosResponse) {
        if(response.data.status != 200){
            message.error(response.data.message || "请求失败，请稍候重试")
            return Promise.reject(response.data);
        }
        
        return response.data;
    },
    async function(error) {
        message.error(error.message || "连接异常，请稍候重试")
        return Promise.reject(error);
    }
);

interface CommonResType{
    result?: any
    status: number
    message?: string
}
export default axios;
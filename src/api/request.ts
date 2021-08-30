import { AxiosRequestConfig } from 'axios'
import { message } from 'ant-design-vue'
import service from './axios'

interface BaseResponse<T> {
  status: number
  result: T
  message?: string
}

const request = <T>(config: AxiosRequestConfig): Promise<BaseResponse<T>> => {
  return new Promise((resolve, reject) => {
    service.request<BaseResponse<T>>(config).then(
      res => {
        resolve(res.data)
      },
      err => {
        switch (err?.code) {
          case 401:
            // token失效

            break
          default:
            message.error(err.message || "服务器连接失败")
            break
        }
        reject(err)
      }
    )
  })
}

export default request

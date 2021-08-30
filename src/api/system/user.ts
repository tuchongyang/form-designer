
import request from '@/api/request'

export interface UserLoginParams {
  name: string
  password: string
}

export function login(opt: UserLoginParams) {
  return request<string>({
    url: "/system/user/login",
    method: "post",
    data: opt
  })
}
export function info() {
  return request({
    url: "/system/user/info",
    method: "get"
  })
}
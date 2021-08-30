import { Module } from "vuex"
import { GlobalDataProps } from "./index"
import api from '@/api'
export interface UserType {
  [key: string]: any
  id?: string
  name?: string
  username?: string
  email?: false
  phone?: string
}

export interface UserProps {
  user: UserType
}
let userInfoStr = localStorage.getItem("userInfo")
let userInfo
if (userInfoStr) {
  userInfo = JSON.parse(localStorage.getItem("userInfo") || "")
} else {
  userInfo = {}
}
const editorModule: Module<UserProps, GlobalDataProps> = {
  state: {
    user: userInfo || {}
  },
  mutations: {
    setUser: (state, preload: UserType) => {
      state.user = preload
      localStorage.setItem('userInfo', JSON.stringify(preload))
    }
  },
  actions: {
    getUserInfo({ commit }) {
      return new Promise<void>((resolve, reject) => {
        api.system.user.info().then(res => {
          commit('setUser', res.result)
          resolve()
        }).catch(() => {
          reject()
        })
      })
    }
  },
  getters: {}
}
export default editorModule

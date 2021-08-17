import { createStore } from "vuex"
import form, { FormProps } from "./form"

export interface GlobalDataProps {
  form: FormProps
}

export default createStore<GlobalDataProps>({
  state: {
    form: {} as FormProps
  },
  mutations: {},
  actions: {},
  modules: {
    form
  }
})

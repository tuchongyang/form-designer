import { Module } from "vuex"
import { GlobalDataProps } from "./index"
import { SelectTypes } from "ant-design-vue/es/select"
export interface ModuleType {
  [key: string]: any
  id: string
  label: string
  type: string
  required: false
  desc?: string
  placeholder?: string
  options?: SelectTypes["options"]
  defaultValue?: string | Array<string>
}
interface HeaderType {
  title?: string
  desc?: string
  style?: string
}
export interface FormProps {
  currentModuleId: string
  moduleList: ModuleType[]
  header: HeaderType
}
interface Preload {
  module: ModuleType
  index: number
}
type UpdatePropType = {
  id: string
  key: string
  value: any
}
const editorModule: Module<FormProps, GlobalDataProps> = {
  state: {
    moduleList: [],
    currentModuleId: "",
    header: {}
  },
  mutations: {
    moduleAdd: (state: FormProps, preload: Preload) => {
      state.moduleList.splice(preload.index, 0, preload.module)
    },
    moduleRemove: (state: FormProps, id: string) => {
      const index = state.moduleList.findIndex((a) => a.id == id)
      if (index > -1) {
        state.moduleList.splice(index, 1)
      }
    },
    moduleUp: (state: FormProps, id: string) => {
      const currentIndex = state.moduleList.findIndex((a) => a.id == id)
      if (currentIndex > 0) {
        const changeIndex: number = currentIndex - 1
        const current = state.moduleList[currentIndex]
        state.moduleList[currentIndex] = state.moduleList[changeIndex]
        state.moduleList[changeIndex] = current
      }
    },
    moduleDown: (state: FormProps, id: string) => {
      const currentIndex = state.moduleList.findIndex((a) => a.id == id)
      if (currentIndex < state.moduleList.length - 1) {
        const changeIndex: number = currentIndex + 1
        const current = state.moduleList[currentIndex]
        state.moduleList[currentIndex] = state.moduleList[changeIndex]
        state.moduleList[changeIndex] = current
      }
    },
    moduleUpdate: (state: FormProps, { id, key, value }: UpdatePropType) => {
      const current: ModuleType | undefined = state.moduleList.find((a) => a.id == id)
      if (current) {
        current[key] = value
      }
    },
    setCurrent: (state: FormProps, id: string) => {
      state.currentModuleId = id
    }
  },
  actions: {},
  getters: {
    getCurrentModule: (state) => {
      return state.moduleList.find((module) => module.id === state.currentModuleId)
    },
    getCurrentHeader: (state) => {
      return state.moduleList.find((module) => module.id === state.currentModuleId)
    }
  }
}
export default editorModule

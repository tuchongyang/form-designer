import { ModuleType } from "@/store/form"
import * as Utils from "@/utils"

export interface FormApiType {
  list: () => Promise<FormType[]>
  detail: (id: string) => Promise<FormType | undefined>
  save: (form: FormSaveOrUpdateType) => Promise<FormType>
  update: (form: FormType) => Promise<void>
}
export interface FormType {
  id: string
  title: string
  desc: string
  createTime: number
  updateTime: number
  modules: Array<ModuleType>
}
interface FormSaveOrUpdateType {
  id?: string
  title: string
  desc: string
  createTime?: number
  updateTime?: number
  modules?: Array<ModuleType>
}
const getFormList = (): FormType[] => {
  let list: FormType[] = []
  const formList = localStorage.getItem("formList")
  if (formList) {
    list = JSON.parse(formList)
  }
  return list
}
const formApi: FormApiType = {
  list() {
    const list = getFormList()
    return Promise.resolve(list)
  },
  detail(id: string): Promise<FormType | undefined> {
    return new Promise<FormType>((resolve: (key: FormType) => void, reject) => {
      const list = getFormList()
      const result = list.find((a) => a.id == id)
      if (result) {
        resolve(result)
      } else {
        reject()
      }
    })
  },
  save(form) {
    const list = getFormList()
    const { title, desc } = form
    const opt: FormType = {
      title,
      desc,
      id: Utils.uniqueId(6),
      createTime: Date.now(),
      updateTime: Date.now(),
      modules: []
    }
    list.unshift(opt)
    localStorage.setItem("formList", JSON.stringify(list))
    return Promise.resolve(opt)
  },
  update(form) {
    const list = getFormList()
    for (const i in list) {
      if (list[i].id == form.id) {
        list[i] = form
      }
    }
    localStorage.setItem("formList", JSON.stringify(list))
    return Promise.resolve()
  }
}
export default formApi

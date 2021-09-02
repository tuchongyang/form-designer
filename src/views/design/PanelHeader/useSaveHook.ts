import { FormDetailType } from "@/store/form"
import * as Utils from "@/utils"
import api from "@/api"
import { UpdateParams } from "@/api/form"
import { message } from "ant-design-vue"
interface SavePrams {
  detail: FormDetailType
}
export function useSaveHook(saveParams: SavePrams) {
  const save = () => {
    const detail = saveParams.detail
    console.log("detail", detail)
    const postData = Utils.deepCopy(detail)
    const content = JSON.stringify(postData.content)
    const saveData: UpdateParams = {
      id: postData.id,
      title: postData.title,
      desc: postData.desc,
      content: content,
      cover: postData.cover
    }
    console.log("saveData", saveData)
    api.form.update(saveData).then(() => {
      message.success("保存成功")
    })
    return detail
  }
  return { save }
}

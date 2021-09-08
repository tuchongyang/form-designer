import { ref, Ref } from "vue"
import { useRoute } from "vue-router"
import api from "@/api"
import { FormDetailType, ContentType } from "@/store/form"
import store from "@/store"
interface ReturnType {
  detail: Ref<FormDetailType | null>
}
export function useDetailHook(): ReturnType {
  // const contentObj: ContentType = { skin: { containerStyle: {}, headerStyle: {} }, modules: [] }
  // const detailObj: FormDetailType = { id: 0, title: "", desc: "", content: contentObj, cover: "" }
  const detail: Ref<FormDetailType | null> = ref(null)
  const route = useRoute()
  const id = route.query.id || 0
  if (id) {
    api.form.detail(+id).then((res) => {
      let content: ContentType | null
      try {
        content = JSON.parse(res.result.content)
      } catch (e) {
        content = null
      }
      if (content === null) {
        content = {
          skin: {
            containerStyle: {},
            headerStyle: {}
          },
          modules: []
        }
      }
      detail.value = { ...res.result, content }
      store.commit("setForm", detail.value)
    })
  }
  return { detail }
}

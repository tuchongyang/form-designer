import { ref, Ref } from "vue"
import { useRoute } from "vue-router"
import api from "@/api"
import { FormDetailType, ContentType } from "@/store/form"
import store from "@/store"
export function useDetailHook() {
  const detail: Ref<FormDetailType | {}> = ref({})
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

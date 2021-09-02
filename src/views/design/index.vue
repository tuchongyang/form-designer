<template>
  <div class="design-container">
    <PanelHeader :detail="detail" />
    <PanelLeft :content="content" />
    <PanelCenter :content="content" :detail="detail" />
    <PanelRight />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue"
import PanelHeader from "./PanelHeader/index.vue"
import PanelLeft from "./PanelLeft/index.vue"
import PanelCenter from "./PanelCenter/index.vue"
import PanelRight from "./PanelRight/index.vue"
import { useDetailHook } from "./useDetailHook"
export default defineComponent({
  components: { PanelHeader, PanelLeft, PanelCenter, PanelRight },
  setup() {
    const content = ref({
      skin: {
        containerStyle: {},
        headerStyle: {}
      }
    })
    const { detail } = useDetailHook()
    return {
      content,
      detail
    }
  }
})
</script>

<style scoped lang="scss">
.design-container {
  min-height: 100vh;
}
</style>

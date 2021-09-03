<template>
  <div class="design-container">
    <PanelHeader :detail="detail" />
    <PanelLeft :content="detail?.content" />
    <PanelCenter :content="content" :detail="detail" />
    <PanelRight />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import PanelHeader from "./PanelHeader/index.vue"
import PanelLeft from "./PanelLeft/index.vue"
import PanelCenter from "./PanelCenter/index.vue"
import PanelRight from "./PanelRight/index.vue"
import { useDetailHook } from "./useDetailHook"
export default defineComponent({
  components: { PanelHeader, PanelLeft, PanelCenter, PanelRight },
  setup() {
    const { detail } = useDetailHook()
    return {
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

<template>
  <div class="panel-right" :class="{ active: currentModule || currentHeader }">
    <ModuleEdit v-if="currentModule" />
    <HeaderEdit v-if="currentHeader" />
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, watch } from "vue"
import { useStore } from "vuex"
import { GlobalDataProps } from "@/store"
import ModuleEdit from "./ModuleEdit.vue"
import HeaderEdit from "./HeaderEdit.vue"

export default defineComponent({
  components: { ModuleEdit, HeaderEdit },
  setup() {
    const store = useStore<GlobalDataProps>()
    const currentModuleId = computed(() => store.state.form.currentModuleId)
    const currentModule = computed(() => store.getters.getCurrentModule)
    const currentHeader = computed(() => store.getters.getCurrentHeader)
    watch(currentHeader, (val, val1) => {
      console.log(val, val1, "=====watch")
    })
    return {
      currentModuleId,
      currentModule,
      currentHeader
    }
  }
})
</script>

<style lang="scss" scoped>
.panel-right {
  width: 300px;
  position: fixed;
  right: 0;
  top: 50px;
  bottom: 0;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  overflow: auto;
  transform: translateX(100%);
  transition: all 0.3s;
  &.active {
    transform: translateX(0);
  }
}
</style>

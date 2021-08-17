<template>
  <a-radio-group v-model:value="defaultValue">
    <a-radio :style="radioStyle" :value="item.value" v-for="(item, i) in data.options" :key="i">{{ item.label }}</a-radio>
  </a-radio-group>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, PropType, computed } from "vue"

import { ModuleType } from "@/store/form"
const PropsType = {
  data: {
    type: Object as PropType<ModuleType>,
    default() {
      return {}
    }
  }
}
export default defineComponent({
  name: "ItemInput",
  props: PropsType,
  setup(props) {
    const value = ref<number>(1)
    const radioStyle = reactive({
      display: "block",
      height: "30px",
      lineHeight: "30px"
    })
    const defaultValue = computed(() => props.data.defaultValue)

    return {
      value,
      radioStyle,
      defaultValue
    }
  }
})
</script>

<template>
  <a-checkbox-group v-model:value="defaultValue">
    <a-checkbox :style="radioStyle" :value="item.value" v-for="(item, i) in data.options" :key="i">{{ item.label }}</a-checkbox>
  </a-checkbox-group>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, computed, PropType } from "vue"

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
    const value = ref<Array<number>>([])
    const radioStyle = reactive({
      display: "block",
      height: "30px",
      lineHeight: "30px",
      marginLeft: 0
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

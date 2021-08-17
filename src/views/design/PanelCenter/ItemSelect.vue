<template>
  <a-select v-model:value="value" label-in-value style="width: 100%" :options="data.options" @change="handleChange"> </a-select>
</template>
<script lang="ts">
// import { SelectTypes } from "ant-design-vue/es/select"
import { defineComponent, ref, PropType } from "vue"
import { ModuleType } from "@/store/form"

interface Value {
  value?: string
  label?: string
}

export default defineComponent({
  name: "ItemSelect",
  props: {
    data: {
      type: Object as PropType<ModuleType>,
      default() {
        return {}
      }
    }
  },
  setup() {
    const handleChange = (value: Value) => {
      value.label = value.value
    }
    return {
      value: ref<Value>({ value: "lucy" }),
      handleChange
    }
  }
})
</script>

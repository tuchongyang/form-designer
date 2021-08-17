<template>
  <a-input :placeholder="data.placeholder" />
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue"

import { ModuleType } from "@/store/form"
export default defineComponent({
  name: "ItemInput",
  props: {
    data: {
      type: Object as PropType<ModuleType>,
      default() {
        return {}
      }
    }
  },
  setup() {
    return {}
  }
})
</script>

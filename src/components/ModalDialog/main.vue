<template>
  <div class="model-dialog">
    <div>这里是消息：{{ msg }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    msg: String
  },
  setup() {}
})
</script>
<style lang="scss" scoped>
.model-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 200px;
  background: red;
  z-index: 90;
}
</style>

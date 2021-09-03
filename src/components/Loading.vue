<template>
  <div class="loading" v-if="loading">
    <div class="img"><img src="../assets/images/loading.svg" height="50" /></div>
    <div class="txt">
      <slot name="msg">{{ msg }}</slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "loading",
  props: {
    msg: {
      type: String,
      default: "加载中"
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
})
</script>
<style lang="scss" scoped>
.loading {
  text-align: center;
  .img {
    margin-bottom: 10px;
  }
  .txt {
    color: #999;
  }
}
</style>

<template>
  <a-modal title="预览" v-model:visible="visible" :confirm-loading="confirmLoading" :footer="null" width="100%" wrapClassName="full-modal">
    <Show mode="preview" v-if="visible" />
  </a-modal>
</template>
<script lang="ts">
import { defineComponent, Ref, ref } from "vue"
import Show from "../../show/index.vue"

export default defineComponent({
  components: { Show },
  setup() {
    const visible: Ref<boolean> = ref(false)
    const open = () => {
      visible.value = true
    }
    return {
      visible,
      open,
      labelCol: { span: 4 }
    }
  }
})
</script>
<style lang="scss">
.full-modal {
  .ant-modal {
    max-width: 100%;
    top: 0;
    padding-bottom: 0;
    margin: 0;
  }
  .ant-modal-content {
    display: flex;
    flex-direction: column;
    height: calc(100vh);
  }
  .ant-modal-body {
    flex: 1;
    overflow: auto;
    padding: 0;
  }
}
</style>

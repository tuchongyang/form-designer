<template>
  <div class="header">
    <div class="logo">
      <img src="../../../assets/images/logo.png" />
    </div>
    <div class="title">表单设计器</div>
    <div class="control">
      <a-button shape="round" @click="save">
        <template #icon>
          <DownloadOutlined />
        </template>
        保存
      </a-button>
      <a-button type="primary" shape="round">
        <template #icon>
          <SendOutlined />
        </template>
        发布
      </a-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, watch } from "vue"
import { SendOutlined } from "@ant-design/icons-vue"
import { useSaveHook } from "./useSaveHook"
import { FormDetailType } from "@/store/form"
const Props = {
  detail: {
    type: Object as PropType<FormDetailType>,
    default() {
      return {}
    }
  }
}
export default defineComponent({
  components: { SendOutlined },
  props: Props,
  setup(props) {
    const saveData = { detail: props.detail }
    const { save } = useSaveHook(saveData)
    console.log("props", props)
    watch(
      () => props.detail,
      (val) => {
        saveData.detail = val
      }
    )
    return { save }
  }
})
</script>
<style scoped lang="scss">
.header {
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  height: 50px;
  padding: 0 15px;
  z-index: 50;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  .logo {
    margin: 7px;
    background: rgba(229, 229, 229, 1);
    border-radius: 12px;
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
    img {
      height: 36px;
      vertical-align: top;
    }
  }
  .title {
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    vertical-align: middle;
  }
  .control {
    float: right;
    padding-top: 10px;
    .ant-btn {
      margin-left: 10px;
    }
  }
}
</style>

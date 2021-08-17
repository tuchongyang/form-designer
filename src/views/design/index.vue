<template>
  <div class="design-container">
    <div class="header">
      <div class="logo">
        <img src="../../assets/images/logo.png" />
      </div>
      <div class="title">表单设计器</div>
    </div>
    <PanelLeft :content="content" />
    <PanelCenter :content="content" />
    <PanelRight />
  </div>
</template>
<script>
import { defineComponent, ref } from "vue"
import PanelLeft from "./PanelLeft"
import PanelCenter from "./PanelCenter"
import PanelRight from "./PanelRight"
// import api from "@/api"
export default defineComponent({
  components: { PanelLeft, PanelCenter, PanelRight },
  setup() {
    const content = ref({
      skin: {
        containerStyle: {},
        headerStyle: {}
      }
    })
    // api.form.list().then((res) => {})
    return {
      content
    }
  }
})
</script>

<style scoped lang="scss">
.design-container {
  min-height: 100vh;
}
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
}
</style>

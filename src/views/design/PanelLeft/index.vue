<template>
  <div class="panel-left">
    <div class="module-bar">
      <ul class="list">
        <li class="item" :class="{ active: index == menutab }" @click="menutab = index" v-for="(item, index) in menuArray" :key="index">
          <component class="icon" :is="item.icon" />
          <span>{{ item.name }}</span>
        </li>
        <li class="item item-active" :style="{ transform: 'translateY(' + menutab * 100 + '%)' }"><div class="active-border"></div></li>
      </ul>
    </div>
    <div class="module-content" v-show="menutab == 0">
      <Modules :content="content"></Modules>
    </div>
    <div class="module-content" v-show="menutab == 1">
      <Skin :content="content"></Skin>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue"
import Modules from "./Modules"
import Skin from "./Skin"
import { AppstoreOutlined, FileTextOutlined } from "@ant-design/icons-vue"
const PropsType = {
  content: {
    type: Object,
    default() {
      return {}
    }
  }
}
export default defineComponent({
  components: { Modules, Skin, AppstoreOutlined, FileTextOutlined },
  props: PropsType,
  setup() {
    const menutab = ref(0)
    const menuArray = ref([
      { name: "模块", icon: "AppstoreOutlined" },
      { name: "皮肤", icon: "FileTextOutlined" }
    ])
    return {
      menutab,
      menuArray
    }
  }
})
</script>
<style lang="scss" scoped>
.panel-left {
  position: fixed;
  left: 0;
  top: 50px;
  background: #403f3e;
  bottom: 0;
  display: flex;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  z-index: 30;
  .module-bar {
    .list {
      margin: 0;
      padding: 0;
      .item {
        position: relative;
        height: 84px;
        width: 64px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        font-size: 14px;
        color: #ccc;
        fill: #a6a6a6;
        cursor: pointer;
        .icon {
          font-size: 26px;
          margin-bottom: 5px;
        }
        &.active {
          color: #fe714b;
        }
      }
      .item-active {
        margin: 0;
        border: none;
        z-index: -1;
        transition: transform 0.3s ease-in-out;
        transition: transform 0.3s ease-in-out;
        top: 0;
        position: absolute;
        height: 84px;
        width: 64px;
        background: #fff;
        &:before {
          content: "";
          width: 10px;
          height: 10px;
          background: #fff;
          position: absolute;
          top: -10px;
          right: 0;
        }
        &:after {
          content: "";
          width: 10px;
          height: 10px;
          background: #403f3e;
          position: absolute;
          top: -10px;
          right: 0;
          border-radius: 0 0 10px 0;
        }
        .active-border {
          background: 0 0;
          border: none;
          position: absolute;
          width: auto;
          height: auto;
          top: 100%;
          right: 0;
          border-bottom-right-radius: 4px;
          border-top-right-radius: 4px;
          &:before {
            content: "";
            width: 10px;
            height: 10px;
            background: #fff;
            position: absolute;
            bottom: -10px;
            right: 0;
          }
          &:after {
            content: "";
            width: 10px;
            height: 10px;
            background: #403f3e;
            position: absolute;
            bottom: -10px;
            right: 0;
            border-radius: 0 10px 0 0;
          }
        }
      }
    }
  }
  .module-content {
    width: 240px;
    background: #fff;
    padding: 20px 10px;
    overflow: auto;
  }
}
</style>

<template>
  <div class="module-control" :class="{ active: currentModuleId == data.id }" @click.stop="setCurrent">
    <div class="drag-hear"><span>放在这里</span></div>
    <div class="outline"></div>
    <div class="control" v-if="!isEmpty">
      <div class="btn" @click.stop="moduleUp"><ArrowUpOutlined /></div>
      <div class="btn" @click.stop="moduleDown"><ArrowDownOutlined /></div>
      <div class="btn" @click.stop="moduleRemove"><CloseOutlined /></div>
    </div>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from "vue"
import { useStore } from "vuex"
import { CloseOutlined, ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons-vue"
import { ModuleType } from "@/store/form"
const PropsType = {
  data: {
    type: Object as PropType<ModuleType>,
    default() {
      return {}
    }
  },
  //是否是空白模块
  isEmpty: {
    type: Boolean,
    default: false
  }
}
export default defineComponent({
  components: { CloseOutlined, ArrowUpOutlined, ArrowDownOutlined },
  props: PropsType,
  setup(props) {
    const store = useStore()
    const currentModuleId = computed(() => store.state.form.currentModuleId)
    const setCurrent = () => {
      if (!props.isEmpty) {
        store.commit("setCurrent", props.data.id)
      }
    }
    const moduleRemove = () => {
      store.commit("moduleRemove", props.data.id)
    }
    const moduleUp = () => {
      store.commit("moduleUp", props.data.id)
    }
    const moduleDown = () => {
      store.commit("moduleDown", props.data.id)
    }

    return {
      currentModuleId,
      setCurrent,
      moduleUp,
      moduleDown,
      moduleRemove
    }
  }
})
</script>

<style lang="scss" scoped>
.module-control {
  position: relative;
  &.active {
    background: #fff8dc;
  }
  .control {
    position: absolute;
    right: 0;
    top: 0;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.05);
    display: none;
    .btn {
      display: block;
      float: left;
      background: #fff;
      width: 30px;
      line-height: 30px;
      text-align: center;
      cursor: pointer;
      &:hover {
        background: #f8f8f8;
      }
      &:first-child {
        border-radius: 0 0 0 5px;
      }
    }
    &:after {
      content: "";
      display: block;
      clear: both;
    }
  }
  .outline {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px dashed #ddd;
    display: none;
    pointer-events: none;
  }
  .drag-hear {
    text-align: center;
    background: #efefef;
    color: #999;
    position: relative;
    height: 0;
    overflow: hidden;
    transition: height 0.3s;
    &.active {
      height: 30px;
    }
    &:before {
      content: "";
      display: block;
      border-top: 1px dashed #ccc;
      width: 100%;
      height: 1px;
      position: absolute;
      top: 50%;
      left: 0;
    }
    span {
      position: relative;
      display: inline-block;
      z-index: 2;
      background: #efefef;
      padding: 5px 10px;
    }
  }
  &:hover {
    .outline,
    .control {
      display: block;
    }
  }
}
</style>

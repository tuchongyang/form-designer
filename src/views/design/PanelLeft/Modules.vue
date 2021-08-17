<template>
  <div class="">
    <div class="module-box" v-for="(item, index) in modules" :key="index">
      <div class="head"><i class="el-icon-caret-bottom"></i> {{ item.name }}</div>
      <ul class="list">
        <li v-for="(child, i) in item.children" :key="i" @mousedown.stop="onMousedown" :data-info="child.name + '|' + child.icon + '|' + child.type">
          <component class="icon" :is="child.icon" />
          <span>{{ child.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue"
// import moduledata from "../../../moduledata"
// import * as Utils from "@/utils"
// import FileService from "@/components/FileService"
import useMouseHook from "./useMouseHook"
import { PicCenterOutlined, UnorderedListOutlined, DownSquareOutlined, CalendarOutlined, FieldBinaryOutlined } from "@ant-design/icons-vue"
export default defineComponent({
  components: { PicCenterOutlined, UnorderedListOutlined, DownSquareOutlined, CalendarOutlined, FieldBinaryOutlined },
  props: {
    content: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  setup() {
    const { onMousedown } = useMouseHook()
    return {
      onMousedown
    }
  },
  data() {
    return {
      modules: [
        {
          name: "常用",
          children: [
            { name: "文本框", icon: "PicCenterOutlined", type: "input" },
            { name: "单选", icon: "UnorderedListOutlined", type: "radio" },
            { name: "多选", icon: "UnorderedListOutlined", type: "checkbox" },
            { name: "下拉", icon: "DownSquareOutlined", type: "select" },
            { name: "时间日期", icon: "CalendarOutlined", type: "date" },
            { name: "数字", icon: "FieldBinaryOutlined", type: "number" }
          ]
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.module-box {
  margin-bottom: 10px;
  .head {
    margin-bottom: 10px;
    i {
      color: #999;
    }
  }
  .list {
    margin: 0;
    padding: 0;
    li {
      width: 70px;
      display: inline-block;
      text-align: center;
      color: #666;
      padding: 5px 0;
      cursor: pointer;
      border-radius: 3px;
      font-size: 12px;
      margin-bottom: 10px;
      .icon {
        line-height: 1;
        vertical-align: top;
        pointer-events: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        font-size: 30px;
        color: #999;
        margin-bottom: 5px;
      }
      span {
        display: block;
        pointer-events: none;
      }
      &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>

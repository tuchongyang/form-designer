<template>
  <div class="options">
    <div class="list">
      <div class="item" v-for="(item, i) in options" :key="i">
        <div class="btn move-handle"><SwapOutlined :style="moveIconStyle" /></div>
        <div class="btn set-default" title="设为默认值" @click="setDefault(item)"><CheckOutlined :style="checkStyle(item)" /></div>
        <input class="txt" v-model="item.value" @input="onInputChange(item)" />
        <div class="delete" @click="deleteItem(i)"><CloseCircleOutlined /></div>
      </div>
    </div>
    <a-button class="btn-add" @click="addItem">添加选项</a-button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, PropType } from "vue"
import { useStore } from "vuex"
import { CloseCircleOutlined, CheckOutlined, SwapOutlined } from "@ant-design/icons-vue"
import { SelectTypes, LabeledValue } from "ant-design-vue/es/select"
import { ModuleType } from "@/store/form"
const PropTypes = {
  options: {
    type: Array as PropType<SelectTypes["options"]>
  },
  data: {
    type: Object as PropType<ModuleType>,
    default() {
      return {}
    }
  }
}
export default defineComponent({
  components: { CloseCircleOutlined, CheckOutlined, SwapOutlined },
  props: PropTypes,
  setup(props) {
    const store = useStore()
    const moveIconStyle = ref({ transform: "rotate(90deg)" })
    const onInputChange = (data: LabeledValue) => {
      data.label = data.value
    }
    const setDefault = (data: LabeledValue) => {
      // const moduleData = props.data as ModuleType
      let defaultValue: string | string[] | undefined = props.data.defaultValue
      const value = data.value as string
      const index = (defaultValue && defaultValue.indexOf(value)) || -1
      if (index > -1) {
        if (defaultValue instanceof Array) {
          defaultValue.splice(index, 1)
        } else {
          defaultValue = ""
        }
      } else {
        if (defaultValue instanceof Array) {
          defaultValue.push(value)
        } else {
          defaultValue = value
        }
      }
      store.commit("moduleUpdate", { id: props.data.id, key: "defaultValue", value: defaultValue })
    }
    const checkStyle = (data: LabeledValue) => {
      const defaultValue = props.data.defaultValue instanceof Array ? props.data.defaultValue.join(",") : props.data.defaultValue
      if (defaultValue && defaultValue.indexOf(data.value + "") > -1) {
        return { color: "red" }
      }
      return ""
    }
    const deleteItem = (i: number) => {
      const options = props.data.options || []
      options.splice(i, 1)
    }
    const addItem = () => {
      const options = props.data.options || []
      let maxNumber = 0
      options.map((cur) => {
        const value = cur.value as string
        const result: RegExpMatchArray | null = value.match(/\d+/)
        if (result && parseInt(result[0]) > maxNumber) {
          maxNumber = +result[0]
        }
      })
      maxNumber++
      options.push({
        label: "选项" + maxNumber,
        value: "选项" + maxNumber
      })
    }
    return {
      moveIconStyle,
      onInputChange,
      setDefault,
      checkStyle,
      deleteItem,
      addItem
    }
  }
})
</script>
<style lang="scss" scoped>
.options {
  .list {
    .item {
      position: relative;
      margin-bottom: 5px;
      &:hover {
        background: #f8f8f8;
        .delete {
          display: block;
        }
      }
      &:after {
        content: "";
        display: block;
        clear: both;
      }
      .btn {
        float: left;
        width: 20px;
        height: 30px;
        color: #aaa;
        cursor: pointer;
        &.active {
          color: cornflowerblue;
        }
      }
      .delete {
        position: absolute;
        right: 0;
        top: 3px;
        cursor: pointer;
        color: red;
        display: none;
      }
      .txt {
        border: 0;
        outline: none;
        border-bottom: 1px solid #ddd;
        width: 200px;
        background: none;
      }
    }
  }
  .btn-add {
    width: 100%;
  }
}
</style>

<template>
  <div class="panel-center" @click="centerClick" :style="content.skin.containerStyle">
    <div class="wrapper">
      <div class="head" :style="content.skin.headerStyle" @click.stop="setHeader">
        <div class="title">{{content.header.title}}</div>
        <div class="desc">{{content.header.desc}}</div>
      </div>
      <div class="content">
        <div class="form">
          <ItemControl v-for="(item, i) in modules" :key="i" :data="item" :isEmpty="false">
            <div class="form-item">
              <div class="title">
                <div class="tit">{{ item.label }}<span style="color: red" v-if="item.required">*</span></div>
                <div class="txt">{{ item.desc }}</div>
              </div>
              <div class="det">
                <div class="component">
                  <component :is="componentMap[item.type]" :data="item" />
                </div>
              </div>
            </div>
          </ItemControl>
          <ItemControl :isEmpty="true">
            <div class="form-item">
              <div class="empty">请从左侧点击拖拽组件</div>
            </div>
          </ItemControl>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "vue"
// import * as Utils from "@/utils"
import { useStore } from "vuex"
import ItemControl from "./ItemControl.vue"
import ItemInput from "./ItemInput.vue"
import ItemRadio from "./ItemRadio.vue"
import ItemCheckbox from "./ItemCheckbox.vue"
import ItemSelect from "./ItemSelect.vue"
const PropsType = {
  content: {
    type: Object,
    default() {
      return {}
    }
  }
}
export default defineComponent({
  components: { ItemInput, ItemRadio, ItemCheckbox, ItemSelect, ItemControl },
  props: PropsType,
  setup(props) {
    const store = useStore()
    const modules = computed(() => store.state.form.moduleList)
    const componentMap = ref({
      input: "item-input",
      radio: "item-radio",
      checkbox: "item-checkbox",
      select: "item-select"
    })
    const currentHeader = computed(() => store.getters.getCurrentHeader)
    const centerClick = () => {
      store.commit("setHeader",null)
      store.commit("setCurrent", "")
    }
    const setHeader = ()=>{
      store.commit("setHeader", props.content.header)
    }
    return {
      modules,
      componentMap,
      currentHeader,
      centerClick,
      setHeader
    }
  }
})
</script>

<style scoped lang="scss">
.panel-center {
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  min-height: calc(100vh - 50px);
  background: #f1f5f1;
  padding: 10px 0;
  .wrapper {
    background: rgba(255, 255, 255, 0.9);
    min-height: calc(100vh - 70px);
    width: 800px;
    margin: 0 auto;
    box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.05);
    .head {
      padding: 20px;
      text-align: center;
      border-bottom: 1px solid #ddd;
      .title {
        font-size: 24px;
        font-weight: 700;
        line-height: 1.4;
      }
      .desc {
        margin-top: 10px;
      }
    }
    .content {
      .form {
        .form-item {
          padding: 12px 30px;
          pointer-events: none;
          .title {
            margin-bottom: 10px;
            .txt {
              color: #999;
            }
          }
          .det {
            padding-left: 10px;
            .component {
              width: 80%;
            }
          }
          .empty {
            text-align: center;
            padding: 30px 0;
            color: #999;
          }
        }
      }
    }
  }
}
</style>

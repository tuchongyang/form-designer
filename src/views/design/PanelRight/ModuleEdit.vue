<template>
  <div class="panel-module">
    <div class="head">
      <div class="title">组件设置</div>
    </div>
    <div class="form">
      <div class="form-item">
        <div class="label">标题</div>
        <div class="det">
          <a-input v-model:value="currentModule.label" />
        </div>
      </div>
      <div class="form-item">
        <div class="label">描述</div>
        <div class="det">
          <a-input v-model:value="currentModule.desc" />
        </div>
      </div>
      <div class="form-item">
        <div class="label">提示文本</div>
        <div class="det">
          <a-input v-model:value="currentModule.placeholder" />
        </div>
      </div>
      <div class="form-item">
        <div class="det">
          <a-checkbox v-model:checked="currentModule.required">这是一个必填项</a-checkbox>
        </div>
      </div>
      <div class="form-item" v-if="currentModule.options">
        <div class="label">选项内容</div>
        <div class="det"><OptionsEdit :options="currentModule.options" :data="currentModule" /></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue"
import { useStore } from "vuex"
import { GlobalDataProps } from "@/store"
import OptionsEdit from "./OptionsEdit.vue"

export default defineComponent({
  components: { OptionsEdit },
  setup() {
    const store = useStore<GlobalDataProps>()
    const currentModuleId = computed(() => store.state.form.currentModuleId)
    const currentModule = computed(() => store.getters.getCurrentModule)
    return {
      currentModuleId,
      currentModule
    }
  }
})
</script>

<style lang="scss" scoped>
.head {
  height: 40px;
  line-height: 40px;
  padding: 0 15px;
  border-bottom: 1px solid #ddd;
}
.form {
  .form-item {
    padding: 10px 15px;
    .label {
      margin-bottom: 5px;
    }
  }
}
</style>

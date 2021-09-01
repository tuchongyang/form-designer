<template>
  <a-modal title="添加表单" v-model:visible="visible" :confirm-loading="confirmLoading" @ok="handleOk" cancelText="取消" okText="确定">
    <a-form ref="formRef" :model="form" :rules="rules" :labelCol="labelCol">
      <a-form-item label="标题" name="title">
        <a-input v-model:value="form.title" />
      </a-form-item>
      <a-form-item label="简介" name="desc">
        <a-input v-model:value="form.desc" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
<script lang="ts">
import { defineComponent, Ref, ref } from "vue"
import { message } from "ant-design-vue"
import { ValidateErrorEntity } from "ant-design-vue/es/form/interface"
import { FormListItem, UpdateParams } from "@/api/form"
import api from "@/api"

interface OpenOptType {
  data: FormListItem | undefined
  success: () => void
}

export default defineComponent({
  setup() {
    const confirmLoading: Ref<boolean> = ref(false)
    const visible: Ref<boolean> = ref(false)
    const formRef = ref()
    const form: Ref<UpdateParams> = ref({
      title: "",
      desc: ""
    })
    let options: OpenOptType = {
      data: undefined,
      success: () => {}
    }
    const open = (opt: OpenOptType) => {
      options = opt
      if (options.data) {
        form.value.title = options.data.title
        form.value.desc = options.data.desc
        form.value.id = options.data.id
      } else {
        form.value.title = ""
        form.value.desc = ""
      }
      visible.value = true
    }
    const rules = ref({
      title: [{ required: true, message: "请输入标题", trigger: "blur" }]
    })
    const save = () => {
      if (form.value.id) {
        api.form.update(form.value).then(() => {
          message.success("保存成功")
          visible.value = false
          if (options.success) {
            options.success()
          }
        })
      } else {
        api.form.save(form.value).then(() => {
          message.success("保存成功")
          visible.value = false
        })
      }
    }
    const handleOk = () => {
      formRef.value
        .validate()
        .then(() => {
          save()
        })
        .catch((error: ValidateErrorEntity<UpdateParams>) => {
          console.log("error", error)
        })
    }
    return {
      confirmLoading,
      visible,
      open,
      form,
      formRef,
      rules,
      handleOk,
      labelCol: { span: 4 }
    }
  }
})
</script>

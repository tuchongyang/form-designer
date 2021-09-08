<template>
  <a-table :dataSource="list" :columns="columns" rowKey="id">
    <template #creator="{ record }">
      <span v-if="record.user">{{ record.user.name || record.user.username }}</span>
      <span v-else>游客</span>
    </template>
    <template #action="{ record }">
      <a-button @click="openDetail(record)">详情</a-button>
    </template>
  </a-table>
  <a-drawer title="反馈详情" placement="right" :closable="false" v-model:visible="visible" :width="600">
    <div class="list">
      <div class="item" v-for="(item, i) in currentData" :key="i">
        <div class="label">{{ i + 1 }}.{{ item.label }}</div>
        <div class="det">{{ item.value }}</div>
      </div>
    </div>
  </a-drawer>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue"
import api from "@/api"
import { AnswerListItem } from "@/api/form/answer"
import { useLoadHook } from "@/hooks/useLoadHook"
import { useRoute } from "vue-router"
import { ModuleType } from "@/store/form"
const Props = {
  detail: {
    type: Object,
    default() {
      return {}
    }
  }
}
export default defineComponent({
  props: Props,
  setup(props) {
    const route = useRoute()
    const { total, loading, list, listQuery, loadData } = useLoadHook<AnswerListItem>({ api: api.form.answer.list, params: { formId: route.query.id } })
    const columns = ref([
      { title: "提交时间", dataIndex: "createdAt", key: "createdAt" },
      { title: "提交人", key: "creator", slots: { customRender: "creator" } },
      { title: "提交Ip", dataIndex: "ip", key: "ip" },
      { title: "操作", key: "action", slots: { customRender: "action" } }
    ])
    loadData()

    const visible = ref(false)
    const currentData = ref([])
    const openDetail = (data: AnswerListItem) => {
      const detail = props.detail
      const content = JSON.parse(data.content)
      currentData.value = detail.content.modules.map((a: ModuleType) => {
        let val = ""
        if (content[a.id] instanceof Array) {
          val = content[a.id].join(",")
        } else {
          val = content[a.id]
        }
        return {
          label: a.label,
          value: val
        }
      })
      console.log("currentData.value", currentData.value)
      visible.value = true
    }
    return { total, loading, list, listQuery, loadData, columns, visible, openDetail, currentData }
  }
})
</script>
<style lang="scss" scoped>
.list {
  .item {
    margin-bottom: 10px;
    .det {
      margin-left: 15px;
    }
  }
}
</style>

<template>
  <div class="container">
    <HeaderBar />
    <div class="content">
      <div class="filter-head">
        <div class="btn btn-primary" @click="toAdd">+ 新建表单</div>
      </div>
      <div class="tit-bar">
        <span class="title">我的表单（{{ projectList.length }}）</span>
      </div>
      <div class="project-list">
        <div class="item" @click="toDesign(item)" v-for="(item, index) in projectList" :key="index">
          <div class="img">
            <img class="empimg" src="../assets/images/empty.png" />
            <div class="btn-group">
              <div class="btn-edit" @click.stop="toAdd(item)"><FormOutlined /></div>
              <div class="btn-remove" @click.stop="remove(item)"><DeleteOutlined /></div>
            </div>
          </div>
          <div class="det">
            <div class="name">{{ item.title }}</div>
            <div class="time">{{ item.createdAt }}</div>
          </div>
        </div>
      </div>
      <empty v-if="projectList.length <= 0"></empty>
    </div>
    <AddForm ref="addForm" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, createVNode } from "vue"
import { useRouter } from "vue-router"
import api from "@/api"
// import axios from "@/api/axios"
import { FormListItem } from "@/api/form"
import { FormOutlined, DeleteOutlined } from "@ant-design/icons-vue"
// import ModalDialog from "@/components/ModalDialog"
import HeaderBar from "@/components/HeaderBar/index.vue"
import AddForm from "./AddForm.vue"
import { Modal, message } from "ant-design-vue"
import { ExclamationCircleOutlined } from "@ant-design/icons-vue"
export default defineComponent({
  name: "Home",
  components: { FormOutlined, DeleteOutlined, HeaderBar, AddForm },
  setup() {
    const projectList: Ref<FormListItem[]> = ref([])
    const router = useRouter()
    const addForm: Ref<typeof AddForm | null> = ref(null)
    const getList = () => {
      api.form.list().then((res) => {
        projectList.value = res.result.rows
      })
    }
    const toAdd = (data: FormListItem) => {
      addForm?.value?.open({
        data,
        success: () => {
          getList()
        }
      })
    }
    const toDesign = (data: FormListItem): void => {
      router.push({
        path: "/design",
        query: {
          id: data.id
        }
      })
    }
    const remove = (data: FormListItem) => {
      Modal.confirm({
        title: "确定删除表单[" + data.title + "]吗？",
        icon: createVNode(ExclamationCircleOutlined),
        onOk() {
          api.form.remove(data.id).then(() => {
            message.success("删除成功")
            getList()
          })
        },
        onCancel() {
          console.log("Cancel")
        }
      })
    }
    getList()
    return { projectList, toAdd, toDesign, addForm, remove }
  }
})
</script>
<style scoped lang="scss">
.container {
  background: #f1f5f1;
  padding-bottom: 10px;
  .content {
    width: 1000px;
    background: #fff;
    margin: 10px auto 0;
    min-height: calc(100vh - 70px);
    padding: 30px;
    box-sizing: border-box;
    .filter-head {
      margin-bottom: 30px;
      .btn {
        display: inline-block;
        height: 30px;
        line-height: 30px;
        padding: 0 25px;
        border-radius: 3px;
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
      }
      .btn-primary {
        background: #3b7b97;
        color: #fff;
      }
    }
    .tit-bar {
      margin-bottom: 20px;
      .title {
        border-left: 4px solid rgba(255, 141, 26, 1);
        padding-left: 10px;
      }
    }
    .project-list {
      overflow: hidden;
      .item {
        width: 170px;
        margin: 0 30px 30px 0;
        border-radius: 10px;
        border: 1px solid #eee;
        float: left;
        cursor: pointer;
        &:hover {
          .img {
            .btn-group {
              display: block;
            }
          }
        }
        .img {
          height: 150px;
          position: relative;
          .empimg {
            width: 80px;
            height: 80px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          .btn-group {
            position: absolute;
            right: 0;
            top: 0;
            display: none;
          }
          .btn-edit {
            width: 30px;
            height: 30px;
            line-height: 30px;
            background: #3f9dff;
            color: #fff;
            border-radius: 0 0 0 10px;
            text-align: center;
            cursor: pointer;
            display: inline-block;
            &:hover {
              opacity: 0.7;
            }
          }
          .btn-remove {
            width: 30px;
            height: 30px;
            line-height: 30px;
            background: #ff7585;
            color: #fff;
            border-radius: 0 10px 0 0;
            text-align: center;
            cursor: pointer;
            display: inline-block;
            &:hover {
              opacity: 0.7;
            }
          }
        }
        .det {
          background: rgba(250, 250, 250, 1);
          padding: 10px;
          border-radius: 10px;
          .name {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            margin-bottom: 5px;
          }
          .time {
            color: #999;
          }
        }
      }
    }
  }
}
</style>

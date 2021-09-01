<template>
  <div class="header">
    <div class="right">
      <ul>
        <li v-if="!user.id"><router-link to="/login">登录</router-link></li>
        <li v-else>
          <router-link to="/">{{ user.name || user.email }}</router-link>
        </li>
      </ul>
    </div>
    <div class="logo">
      <img src="../../assets/images/logo.png" />
    </div>
    <div class="title">表单设计器</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue"
import { useStore } from "vuex"

export default defineComponent({
  name: "HeaderBar",
  setup() {
    const store = useStore()
    const user = computed(() => store.state.user.user)
    return { user }
  }
})
</script>

<style scoped lang="scss">
.header {
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  height: 50px;
  padding: 0 15px;
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
  .right {
    float: right;
    ul {
      li {
        float: left;
        padding: 15px 10px;
        list-style: none;
      }
    }
  }
}
</style>

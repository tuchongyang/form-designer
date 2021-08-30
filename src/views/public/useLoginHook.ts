import { ref } from 'vue'
import api from '@/api'
import { message } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default function () {
  const router = useRouter()
  const store = useStore()
  const form = ref({
    name: "",
    password: ""
  })
  const rules = ref({
    name: [
      { required: true, message: "请输入账号", trigger: "blur" }
    ],
    password: [
      { required: true, message: "请输入密码", trigger: "blur" }
    ]
  })
  const loading = ref(false)

  const onSubmit = () => {
    api.system.user.login(form.value).then(res => {
      message.success('登录成功')
      localStorage.setItem('token', res.result)
      store.dispatch('getUserInfo').then(() => {
        router.push('/')
      })
    })
  }
  return {
    form,
    rules,
    onSubmit,
    loading
  }
}
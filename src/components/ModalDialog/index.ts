import { render, createVNode } from "vue"
import Main from "./main.vue"
import type { ComponentPublicInstance } from "vue"

// const initInstance = (props: any, container: HTMLElement)=>{
//     const vnode = h(Main, props)
//     render(vnode, container)
//     container.firstElementChild && document.body.appendChild(container.firstElementChild)
//     return vnode.component
// }

const getContainer = () => {
  return document.createElement("div")
}
const options = {
  msg: "hello"
}
interface ReturnType {
  close: () => void
}
const ModalDialog = (): ReturnType => {
  const container = getContainer()
  const vm = createVNode(Main, options)
  if (vm.props) {
    vm.props.onDestroy = () => {
      render(null, container)
    }
  }
  render(vm, container)
  container.firstElementChild && document.body.appendChild(container.firstElementChild)
  return {
    close: () => {
      ;((vm.component && (vm.component.proxy as ComponentPublicInstance<{ visible: boolean }>)) || { visible: false }).visible = false

      render(null, container)
    }
  }
}
export default ModalDialog

import { ModuleType } from "@/store/form"
// enum ModuleTypeMap {
//   INPUT = "input",
//   RADIO = "radio",
//   CHECKBOX = "checkbox",
//   SELECT = "select"
// }

export const defaultData: Array<ModuleType> = [
  { id: "1", label: "文本框", type: "input", desc: "", required: false, placeholder: "" },
  {
    id: "2",
    label: "单选",
    type: "radio",
    desc: "",
    required: false,
    options: [
      { label: "选项1", value: "选项1" },
      { label: "选项2", value: "选项2" },
      { label: "选项3", value: "选项3" }
    ],
    defaultValue: ""
  },
  {
    id: "3",
    label: "多选",
    type: "checkbox",
    desc: "",
    required: false,
    options: [
      { label: "选项1", value: "选项1" },
      { label: "选项2", value: "选项2" },
      { label: "选项3", value: "选项3" }
    ],
    defaultValue: []
  },
  {
    id: "4",
    label: "下拉",
    type: "select",
    desc: "",
    required: false,
    options: [
      { label: "选项1", value: "选项1" },
      { label: "选项2", value: "选项2" },
      { label: "选项3", value: "选项3" }
    ],
    defaultValue: ""
  }
]

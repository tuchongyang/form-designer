import form, { FormApiType } from "./form"
export interface ApiType {
  form: FormApiType
}
const Api: ApiType = {
  form: form
}

export default Api

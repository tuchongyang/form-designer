import request, { BaseResponse, ListPageType } from "@/api/request"
import { ContentType } from "@/store/form"

export interface FormListItem {
  id: number
  title: string
  desc: string
  status: number
  content: string
  viewCount: number
  cover: string
  creator: number
  createdAt: string
  updatedAt: string
}

export function save(opt: UpdateParams): Promise<BaseResponse<undefined>> {
  return request<undefined>({
    url: "/form/save",
    method: "post",
    data: opt
  })
}

export interface UpdateParams {
  id?: number
  title: string
  desc?: string
  content: string
  cover?: string
}
export function update(opt: UpdateParams): Promise<BaseResponse<undefined>> {
  const { id, ...params } = opt
  return request<undefined>({
    url: "/form/update/" + opt.id,
    method: "post",
    data: params
  })
}
export function list(): Promise<BaseResponse<ListPageType<FormListItem>>> {
  return request<ListPageType<FormListItem>>({
    url: "/form/list",
    method: "get"
  })
}

export function remove(id: number): Promise<BaseResponse<undefined>> {
  return request<undefined>({
    url: "/form/" + id,
    method: "delete"
  })
}
export function detail(id: number): Promise<BaseResponse<FormListItem>> {
  return request<FormListItem>({
    url: "/form/" + id,
    method: "get"
  })
}
export default { save, list, update, remove, detail }

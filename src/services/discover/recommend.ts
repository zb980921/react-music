import type { BannerItem } from '../models'
import request from '../request'

/** 获取轮播图列表 */
export function getBanner() {
  return request.get<BannerItem>({ url: '/banner', params: { type: 0 } })
}

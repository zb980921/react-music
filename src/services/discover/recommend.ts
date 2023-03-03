import type { BannerItem, HotPlaylistCategory } from '../models'
import request from '../request'

/** 获取轮播图列表 */
export function getBanner() {
  return request.get<BannerItem>({ url: '/banner', params: { type: 0 } })
}

/** 获取热门歌单分类 */
export function getHotPlaylistCategory() {
  return request.get<HotPlaylistCategory>({ url: '/playlist/hot' })
}

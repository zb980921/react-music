import type {
  Banner,
  HotPlaylistCategory,
  NewestAlbum,
  RecommendPlaylist,
} from '../models'
import type { ResWithCode, ResWithHasTaste } from '../models/share'
import request from '../request'

/** 获取轮播图列表 */
export function getBanner() {
  return request.get<ResWithCode & { banners: Banner[] }>({
    url: '/banner',
    params: { type: 0 },
  })
}

/** 获取热门歌单分类 */
export function getHotPlaylistCategory() {
  return request.get<ResWithCode & { tags: HotPlaylistCategory[] }>({
    url: '/playlist/hot',
  })
}

/**
 * 获取热门推荐歌单列表
 * @param limit 条数
 * @returns
 */
export function getRecommendPlaylists(limit = 8) {
  return request.get<ResWithHasTaste & { result: RecommendPlaylist[] }>({
    url: '/personalized',
    params: { limit },
  })
}

/** 获取新碟上架 */
export function getNewestAlbums() {
  return request.get<ResWithCode & { albums: NewestAlbum[] }>({
    url: '/album/newest',
  })
}

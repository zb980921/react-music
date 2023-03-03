import type { ResWithCode } from '../share'

/** 轮播图 */
export type BannerItem = {
  banners: Array<{
    imageUrl: string
    targetId: number
    adid?: any
    targetType: number
    titleColor: string
    typeTitle: string
    url?: any
    exclusive: boolean
    monitorImpress?: any
    monitorClick?: any
    monitorType?: any
    monitorImpressList?: any
    monitorClickList?: any
    monitorBlackList?: any
    extMonitor?: any
    extMonitorInfo?: any
    adSource?: any
    adLocation?: any
    adDispatchJson?: any
    encodeId: string
    program?: any
    event?: any
    video?: any
    song?: any
    scm: string
    bannerBizType: string
  }>
} & ResWithCode

interface PlaylistTag {
  id: number
  name: string
  category: number
  usedCount: number
  type: number
  position: number
  createTime: number
  highQuality: number
  highQualityPos: number
  officialPos: number
}

/** 热门歌单分类 */
export type HotPlaylistCategory = {
  tags: Array<{
    playlistTag: PlaylistTag
    activity: boolean
    hot: boolean
    createTime: number
    position: number
    category: number
    usedCount: number
    name: string
    id: number
    type: number
  }>
} & ResWithCode

export interface MenuItem {
  key: string
  title: string
  path: string
  external?: boolean
  items?: MenuItem[]
}

export const MENU_CONFIG: MenuItem[] = [
  {
    key: '1',
    title: '发现音乐',
    path: '/discover',
    items: [
      { key: '1-1', title: '推荐', path: '/discover/recommend' },
      { key: '1-2', title: '排行榜', path: '/discover/toplist' },
      { key: '1-3', title: '歌单', path: '/discover/playlist' },
      { key: '1-4', title: '主播电台', path: '/discover/djradio' },
      { key: '1-5', title: '歌手', path: '/discover/artist' },
      { key: '1-6', title: '新碟上架', path: '/discover/album' },
    ],
  },
  {
    key: '2',
    title: '我的音乐',
    path: '/my',
  },
  {
    key: '3',
    title: '关注',
    path: '/friend',
  },
  {
    key: '4',
    title: '商城',
    path: 'https://music.163.com/store/product',
    external: true,
  },
  {
    key: '5',
    title: '音乐人',
    path: 'https://music.163.com/musician/artist',
    external: true,
  },
  {
    key: '6',
    title: '下载客户端',
    path: '/download',
  },
]

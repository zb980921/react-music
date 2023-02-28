import { Link, NavLink, useLocation } from 'react-router-dom'
import { useMemo } from 'react'
import style from './Header.module.scss'
import SvgIcon from '@/components/SvgIcon'
import logo from '@/assets/imgs/logo.jpg'
import { MENU_CONFIG } from '@/router'

const menus = [
  { to: '/discover', title: '发现音乐' },
  { to: '/my', title: '我的音乐' },
  { to: '/friend', title: '关注' },
  { to: 'https://music.163.com/store/product', title: '商城' },
  { to: 'https://music.163.com/musician/artist', title: '音乐人' },
  { to: '/download', title: '下载客户端' },
]

const DISCOVER = '/discover'
const DISCOVER_SUB_MENUS = MENU_CONFIG.find(menu => menu.path === DISCOVER)!
  .items!
const Header = () => {
  const { pathname } = useLocation()

  const isDiscover = useMemo(() => pathname.startsWith(DISCOVER), [pathname])

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.inner}>
          <div className={style.left}>
            <a href="/" className={style.logo}>
              <img src={logo} alt="React 云音乐" />
              <span>React 云音乐</span>
            </a>

            <ul className={style.menus}>
              {menus.map(({ title, to }) => {
                const external = to.startsWith('http')
                return (
                  <li key={title} className={style.menu}>
                    {external
                      ? (
                      <Link to={to} target="_blank">
                        {title}
                      </Link>
                        )
                      : (
                      <NavLink
                        to={to}
                        className={({ isActive }) =>
                          isActive ? style.active : ''
                        }
                      >
                        {title}
                      </NavLink>
                        )}
                  </li>
                )
              })}
            </ul>
          </div>

          <div className={style.right}>
            <div className={style.search}>
              <SvgIcon name="search" width="16" height="16" color="#666" />
              <input type="text" placeholder="音乐/视频/电台/用户" />
            </div>

            <a
              href="https://music.163.com/login?targetUrl=%2Fcreatorcenter"
              target={'_blank'}
              className={style.creator}
              rel="noreferrer"
            >
              创作者中心
            </a>

            <a href="/" className={style.login}>
              登录
            </a>
          </div>
        </div>
      </div>

      <div className={style.subMenuWrapper}>
        {isDiscover && (
          <div className={style.subMenu}>
            {DISCOVER_SUB_MENUS.map(item => (
              <NavLink
                to={item.path}
                key={item.key}
                className={({ isActive }) => (isActive ? style.subActive : '')}
              >
                <em>{item.title}</em>
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Header

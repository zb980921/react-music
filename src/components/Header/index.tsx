import { Link } from 'react-router-dom'
import SvgIcon from '../SvgIcon'
import style from './Header.module.scss'
import logo from '@/assets/imgs/logo.jpg'

const menus = [
  { to: '/', title: '发现音乐' },
  { to: '/my', title: '我的音乐' },
  { to: '/friend', title: '关注' },
  { to: 'https://music.163.com/store/product', title: '商城' },
  { to: 'https://music.163.com/musician/artist', title: '音乐人' },
  { to: '/download', title: '下载客户端' },
]

const Header = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.inner}>
        <div className={style.left}>
          <a href="/" className={style.logo}>
            <img src={logo} alt="React 云音乐" />
            <span>React 云音乐</span>
          </a>

          <ul className={style.menus}>
            {menus.map(({ title, to }) => (
              <li key={title} className={style.menu}>
                <Link
                  to={to}
                  target={to.startsWith('http') ? '_blank' : '_self'}
                >
                  {title}
                </Link>
              </li>
            ))}
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
  )
}

export default Header

import { Link } from 'react-router-dom'
import style from './Container.module.scss'
import SvgIcon from '@/components/SvgIcon'

interface Props {
  title: string
  moreLink: string
  headChild?: React.ReactElement
  children: React.ReactElement
}

const Container = ({ title, moreLink, headChild, children }: Props) => {
  return (
    <div>
      <div className={style.header}>
        <div className={style.headerLeft}>
          <Link to={moreLink}>
            <h3>{title}</h3>
          </Link>
          {headChild}
        </div>
        <div className={style.headerRight}>
          <Link to={moreLink}>
            更多
            <SvgIcon name="arrow-more" color="#c20c0c" size={10} />
          </Link>
        </div>
      </div>
      {children}
    </div>
  )
}
export default Container

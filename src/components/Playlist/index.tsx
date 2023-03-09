import { Link } from 'react-router-dom'
import SvgIcon from '../SvgIcon'
import style from './Playlist.module.scss'
import { formatCount } from '@/utils/format'

interface Props {
  id: number
  name: string
  playCount: number
  cover: string
}

const Playlist = ({ id, name, cover, playCount }: Props) => {
  return (
    <Link className={style.wrapper} to={`/playlist?id=${id}`}>
      <div className={style.cover}>
        <img src={cover} />
        <div className={style.info}>
          <div>
            <SvgIcon size={16} name="headphone" color="#ccc" />
            <span>{formatCount(playCount)}</span>
          </div>
          <SvgIcon size={18} name="play" color="#ccc" />
        </div>
      </div>
      <div className={style.name}>{name}</div>
    </Link>
  )
}
export default Playlist

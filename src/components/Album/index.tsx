import { Link } from 'react-router-dom'
import style from './Album.module.scss'

interface Props {
  id: number
  cover: string
  name: string
  artists: Array<{ id: number; name: string }>
  size?: 'small' | 'large'
}

const Album = ({ id, artists, cover, name }: Props) => {
  return (
    <div className={style.wrapper}>
      <Link className={style.cover} to={`/album?id=${id}`}>
        <img src={cover} />
      </Link>
      <Link className={style.name} to={`/album?id=${id}`}>
        {name}
      </Link>
      <div
        className={style.artist}
        title={artists.map(a => a.name).join(' / ')}
      >
        {artists.map(({ id, name }, idx) => (
          <span key={id}>
            <Link to={`/artist?id=${id}`}>{name}</Link>
            {idx < artists.length - 1 && (
              <span className={style.line}>&nbsp;/&nbsp;</span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
export default Album

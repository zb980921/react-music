import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container'
import style from './Hot.module.scss'
import type { HotPlaylistCategory, RecommendPlaylist } from '@/services'
import { getHotPlaylistCategory, getRecommendPlaylists } from '@/services'
import Playlist from '@/components/Playlist'

const HOT_CATEGORY_COUNT = 5

const Hot = () => {
  const [hotPlaylistCategories, setHotPlaylistCategories] = useState<
    HotPlaylistCategory[]
  >([])

  const [recommendPlaylists, setRecommendPlaylists] = useState<
    RecommendPlaylist[]
  >([])

  useEffect(() => {
    getHotPlaylistCategory().then((res) => {
      setHotPlaylistCategories(res.tags)
    })
    getRecommendPlaylists().then((res) => {
      setRecommendPlaylists(res.result)
    })
  }, [])

  const headChild = (
    <ul className={style.hotCategories}>
      {hotPlaylistCategories
        .slice(0, HOT_CATEGORY_COUNT)
        .map(({ name }, idx) => (
          <li key={idx}>
            <Link to={`/discover/playlist?cat=${name}`}>{name}</Link>
            {idx < HOT_CATEGORY_COUNT - 1 ? <span>|</span> : null}
          </li>
        ))}
    </ul>
  )

  return (
    <Container
      title="热门推荐"
      moreLink="/discover/playlist"
      headChild={headChild}
    >
      <div className={style.list}>
        {recommendPlaylists.map(({ id, name, playCount, picUrl }) => (
          <Playlist
            key={id}
            id={id}
            name={name}
            playCount={playCount}
            cover={picUrl}
          />
        ))}
      </div>
    </Container>
  )
}
export default Hot

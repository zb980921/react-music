import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container'
import style from './Hot.module.scss'
import type { HotPlaylistCategory } from '@/services'
import { getHotPlaylistCategory } from '@/services'

const HOT_CATEGORY_COUNT = 5

const Hot = () => {
  const [hotPlaylistCategories, setHotPlaylistCategories]
    = useState<HotPlaylistCategory>()

  useEffect(() => {
    getHotPlaylistCategory().then((res) => {
      setHotPlaylistCategories(res)
    })
  }, [])

  const headChild = (
    <ul className={style.hotCategories}>
      {hotPlaylistCategories?.tags
        .slice(0, HOT_CATEGORY_COUNT)
        .map(({ id, name }, idx) => (
          <>
            <li key={id}>
              <Link to={`/discover/playlist?cat=${name}`}>{name}</Link>
            </li>
            {idx < HOT_CATEGORY_COUNT - 1 ? <span>|</span> : null}
          </>
        ))}
    </ul>
  )

  return (
    <Container
      title="热门推荐"
      moreLink="/discover/playlist"
      headChild={headChild}
    >
      <div className={style.list}>123</div>
    </Container>
  )
}
export default Hot

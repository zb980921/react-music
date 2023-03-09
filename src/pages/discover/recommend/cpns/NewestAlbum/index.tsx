import { useEffect, useRef, useState } from 'react'
import Container from '../Container'
import style from './NewestAlbum.module.scss'
import type { NewestAlbum } from '@/services'
import { getNewestAlbums } from '@/services'
import Album from '@/components/Album'
import SvgIcon from '@/components/SvgIcon'

const NewestAlbums = () => {
  const [newestAlbums, setNewestAlbums] = useState<NewestAlbum[]>([])
  const [beginIndex, setBeginIndex] = useState(0)

  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    getNewestAlbums().then((res) => {
      setNewestAlbums([
        ...res.albums.slice(5, 10),
        ...res.albums.slice(0, 5),
        ...res.albums.slice(5, 10),
      ])
    })

    listRef.current!.style.transform = 'translateX(-645px)'
    listRef.current!.addEventListener('transitionend', onTransitionEnd)

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      listRef.current!.removeEventListener('transitionend', onTransitionEnd)
    }
  }, [])

  function onTransitionEnd() {
    listRef.current!.style.transition = 'none'
    listRef.current!.style.transform = 'translateX(-645px)'
    // listRef.current!.style.transition = 'all 1s'
  }

  function onClickPrev() {
    listRef.current!.style.transform = 'translateX(0px)'
  }
  function onClickNext() {
    listRef.current!.style.transform = 'translateX(-1290px)'
  }

  return (
    <Container title="新碟上架" moreLink="/discover/album">
      <div className={style.wrapper}>
        <div className={style.inner}>
          <div onClick={onClickPrev}>
            <SvgIcon name="arrow-left" />
          </div>
          <div className={style.scroll}>
            <ul ref={listRef} className={style.list}>
              {newestAlbums.map(({ id, artists, picUrl, name }, idx) => {
                return (
                  <Album
                    key={idx}
                    id={id}
                    artists={artists.map(({ id, name }) => ({ id, name }))}
                    cover={picUrl}
                    name={name}
                  />
                )
              })}
            </ul>
          </div>
          <div onClick={onClickNext}>
            <SvgIcon name="arrow-right" />
          </div>
        </div>
      </div>
    </Container>
  )
}
export default NewestAlbums

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import style from './Banner.module.scss'
import type { BannerItem } from '@/services'
import { getBanner } from '@/services'
import SvgIcon from '@/components/SvgIcon'

const targetMap = {
  1: 'song',
  10: 'album',
} as Record<number, string>

const Banner = () => {
  const [banner, setBanner] = useState<BannerItem>()
  useEffect(() => {
    getBanner().then(res => setBanner(res))
  }, [])

  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalIdRef = useRef<NodeJS.Timer>()
  const startInterval = useCallback(() => {
    if (intervalIdRef.current)
      stopInterval()
    if (banner) {
      intervalIdRef.current = setInterval(() => {
        setCurrentIndex(i => (i === banner.banners.length - 1 ? 0 : i + 1))
      }, 5000)
    }
  }, [banner])
  function stopInterval() {
    clearInterval(intervalIdRef.current)
  }
  useEffect(() => {
    startInterval()
  }, [startInterval])

  const currentBannerItem = useMemo(
    () => banner?.banners[currentIndex],
    [banner, currentIndex],
  )

  function updateCurrentIndex(offset: 1 | -1) {
    if (banner) {
      let _ci = currentIndex + offset
      if (_ci > banner.banners.length - 1)
        _ci = 0
      else if (_ci < 0)
        _ci = banner.banners.length - 1
      setCurrentIndex(_ci)
    }
  }

  function genBannerLink(targetType: number, targetId: number) {
    return `/${targetMap[targetType]}?id=${targetId}`
  }

  return currentBannerItem?.scm
    ? (
    <div
      className={style.wrapper}
      style={{
        backgroundImage: `url(${currentBannerItem.imageUrl}?imageView&blur=40x20)`,
      }}
      onMouseOver={stopInterval}
      onMouseLeave={startInterval}
    >
      <div className={style.banner}>
        {/* 图片展示 */}
        <div className={style.ban}>
          <a
            href={genBannerLink(
              currentBannerItem.targetType,
              currentBannerItem.targetId,
            )}
          >
            <img src={currentBannerItem.imageUrl} alt="" />
          </a>
        </div>

        {/* 下载区域 */}
        <div className={style.download}>
          <a
            className={style.btn}
            href="https://music.163.com/download"
            target="_blank"
            rel="noreferrer"
          ></a>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </div>

        {/* 左右箭头 */}
        <div
          className={`${style.arrow} ${style.left}`}
          onClick={() => updateCurrentIndex(-1)}
        >
          <SvgIcon name="arrow-left" color="#fff" />
        </div>
        <div
          className={`${style.arrow} ${style.right}`}
          onClick={() => updateCurrentIndex(1)}
        >
          <SvgIcon name="arrow-right" color="#fff" />
        </div>

        {/* 指示点 */}
        <div className={style.dots}>
          {banner!.banners.map((_, i) => (
            <a
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={currentIndex === i ? style.active : ''}
            >
              <span className={style.dot}></span>
            </a>
          ))}
        </div>
      </div>
    </div>
      )
    : null
}
export default Banner

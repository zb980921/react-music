import Banner from './cpns/Banner'
import Hot from './cpns/Hot'
import MyInfo from './cpns/MyInfo'
import NewestAlbum from './cpns/NewestAlbum'
import Ranking from './cpns/Ranking'
import style from './index.module.scss'

const Recommend = () => {
  return (
    <>
      <Banner />

      <div className={style.main}>
        <div className={style.left}>
          <Hot />
          <NewestAlbum />
          <Ranking />
        </div>
        <div className={style.right}>
          <MyInfo />
        </div>
      </div>
    </>
  )
}

export default Recommend

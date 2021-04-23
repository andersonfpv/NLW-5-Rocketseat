import { Header } from '../components/Header/Index'
import '../styles/global.scss'
import styles from '../styles/app.module.scss'
import { Player } from '../components/Player/Index'
import { PlayerContextProvider } from '../components/contexts/PlayerContext'

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContextProvider>
  )
}

export default MyApp

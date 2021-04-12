import { HistoryProvider } from '../contexts/history'
import GlobalStyle from '../styles/global'

function MyApp({ Component, pageProps }) {
  return (
    <HistoryProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </HistoryProvider>
  )
}

export default MyApp

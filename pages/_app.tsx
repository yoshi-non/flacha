import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps, router }: AppProps) => (
  <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
    <Component key={router.asPath} {...pageProps} />
  </AnimatePresence>
)

export default App
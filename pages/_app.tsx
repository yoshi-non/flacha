import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import { config as FaSvgCoreConfig } from '@fortawesome/fontawesome-svg-core'

FaSvgCoreConfig.autoAddCss = false

const App = ({ Component, pageProps, router }: AppProps) => (
  <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
    <Component key={router.asPath} {...pageProps} />
  </AnimatePresence>
)

export default App
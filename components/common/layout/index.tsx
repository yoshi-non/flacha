import React from 'react'
import { motion } from 'framer-motion'
import { pageTransition } from '../../../animations/variants'

type Props = {
    children: React.ReactNode
  }

const Layout = ({children}: Props) => {
    return (
        <motion.div
            {...pageTransition}
        >
            <main>
                {children}
            </main>
        </motion.div>
    )
}

export default Layout

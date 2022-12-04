import { HTMLMotionProps } from 'framer-motion'

/** ページの遷移アニメーション */
export const pageTransition: HTMLMotionProps<'div'> = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
}
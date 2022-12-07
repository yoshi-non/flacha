import { HTMLMotionProps, Variants } from 'framer-motion'

/** ページの遷移アニメーション */
export const pageTransition: HTMLMotionProps<'div'> = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
}

/** フェードインでポップアップ */
export const fadeInPopup: Variants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        scale: [0, 1, 1.05, 1],
        transition: {
            duration: 0.6,
            ease: 'easeInOut'
        }
    }
}

/** フェードインで表示 */
export const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeInOut'
        }
    }
}
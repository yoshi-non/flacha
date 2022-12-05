import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Home.module.css'

const Button = () => {
  return (
  <div className={styles.btnBox}>
    <Link href="Flash" className={styles.btnBlock} scroll={false}>
      フラッシュモード
    </Link>
    <Link href="Chat" className={styles.btnBlock} scroll={false}>
      チャットモード
    </Link>
    <div className={styles.btnBlock}>
      遊び方
    </div>
    <Link href="Setting" className={styles.btnBlock} scroll={false}>
      設定
    </Link>
    <Link href="Credit" className={styles.btnBlock} scroll={false}>
      クレジット
    </Link>
  </div>
  )
}

export default Button

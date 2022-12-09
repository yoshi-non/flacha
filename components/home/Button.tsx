import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Home.module.css'

const Button = () => {
  return (
  <div className={styles.btnBox}>
    <Link href="Flash" className={styles.btnBlock} scroll={false}>
      フラッシュモード
    </Link>
    <Link href="/" className={styles.btnBlock} scroll={false}>
      チャットモード※未完成
    </Link>
    <div className={styles.btnBlock}>
      遊び方※未完成
    </div>
    <Link href="/" className={styles.btnBlock} scroll={false}>
      設定※未完成
    </Link>
    <Link href="Credit" className={styles.btnBlock} scroll={false}>
      クレジット
    </Link>
  </div>
  )
}

export default Button

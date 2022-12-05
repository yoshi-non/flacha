import Link from 'next/link'
import React from 'react'
import Layout from '../components/common/layout'
import styles from '../styles/Flash.module.css'

const Flash = () => {
  return (
    <Layout>
      <Link href="/">ホームに戻る</Link>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.btnBox}>
            <button className={styles.btnFlash}>スタート</button>
            <button className={styles.btnFlash}>遊び方</button>
            <button className={styles.btnFlash}>設定</button>
          </div>
        </main>
      </div>
    </Layout>
  )
}

export default Flash
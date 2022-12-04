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
          Flash
        </main>
      </div>
    </Layout>
  )
}

export default Flash
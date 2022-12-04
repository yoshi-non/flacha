import Link from 'next/link'
import React from 'react'
import Layout from '../components/common/layout'
import styles from '../styles/Chat.module.css'

const Chat = () => {
  return (
    <Layout>
      <Link href="/">ホームに戻る</Link>
      <div className={styles.container}>
        <main className={styles.main}>
          Chat
        </main>
      </div>
    </Layout>
  )
}

export default Chat
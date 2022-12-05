import React from 'react'
import Layout from '../components/common/layout'
import ExternalLink from '../components/ExternalLink'
import styles from '../styles/Credit.module.css'

const Credit = () => {
  return (
    <Layout>
        <div className={styles.container}>
            <ExternalLink
                title="GitHub"
                description="このサイトを構成しているソースコードはGitHubにて公開しております。"
                href="https://github.com/yoshi-non/flacha"
                src="/images/GitHub-icon.png"
                linkText="GitHub"
            />
            <ExternalLink
                title="背景・配信画面素材"
                description="当サイトの画像は花杜ゆのき様のフリー素材を使わせて頂いております。"
                href="https://twitter.com/hanamori_design"
                src="/images/sozai-icon.png"
                linkText="Twitter"
            />
        </div>
    </Layout>
  )
}

export default Credit

import { css } from '@emotion/react'
import React from 'react'
import ReturnButton from '../components/common/button/ReturnButton'
import Layout from '../components/common/layout'
import ExternalLink from '../components/ExternalLink'

const styles = {
  container: css`
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
  `,
}

const Credit = () => {
  return (
    <Layout>
      <ReturnButton/>
      <div css={styles.container}>
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

import { css } from '@emotion/react'
import Link from 'next/link'
import React from 'react'

const styles = {
  btnBox: css`
    margin-top: 5rem;
    margin-left: 3rem;
  `,

  btnBlock: css`
    padding: 0.5rem 5rem;
    margin: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #8187fa;
    font-size: 1.5rem;
    font-weight: 900;
    background-color: #fff3f8;
    border: 4px solid #8187fa;
    border-right: 10px solid #8187fa;
    border-bottom: 10px solid #8187fa;

    border-radius: 30px;
    cursor: pointer;
    transition: 0.6s;

    &:hover {
      filter: opacity(70%);
    }
  `,
}


const Button = () => {
  return (
  <div css={styles.btnBox}>
    <Link href="Flash" css={styles.btnBlock} scroll={false}>
      フラッシュモード
    </Link>
    <Link href="/" css={styles.btnBlock} scroll={false}>
      チャットモード※未完成
    </Link>
    <div css={styles.btnBlock}>
      遊び方※未完成
    </div>
    <Link href="/" css={styles.btnBlock} scroll={false}>
      設定※未完成
    </Link>
    <Link href="Credit" css={styles.btnBlock} scroll={false}>
      クレジット
    </Link>
  </div>
  )
}

export default Button

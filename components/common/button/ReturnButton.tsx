import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply } from '@fortawesome/free-solid-svg-icons'
import { css } from '@emotion/react'

const styles = {
/* Return(ホームに戻る)ボタン */
  returnContainer: css`
    position: absolute;
    margin: 15px 0 0 15px;
    top: 0;
    left: 0;
    z-index: 100;
`,
  returnBox: css`
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 80px;
`,
  returnIcon: css`
    color: #8187fa;
    padding: 10px;
    width: 35px;
    height: 35px;
    border: 5px solid #8187fa;
    border-right: 10px solid #8187fa;
    border-bottom: 10px solid #8187fa;
    border-radius: 100%;
`,
  returnText: css`
    padding: 5px 10px;
    border-top: 5px solid #8187fa;
    border-bottom: 10px solid #8187fa;
    border-radius: 5px;
    font-size: 35px;
    font-weight: 600;
`,
}

const ReturnButton = () => {
  return (
    <Link href="/" css={styles.returnContainer}>
        <div css={styles.returnBox}>
        <FontAwesomeIcon icon={faReply} css={styles.returnIcon} />
        <p css={styles.returnText}>
            ホームに戻る
        </p>
        </div>
    </Link>
    )
}

export default ReturnButton

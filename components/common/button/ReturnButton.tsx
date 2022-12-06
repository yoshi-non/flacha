import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply } from '@fortawesome/free-solid-svg-icons'
import styles from '../../../styles/CommonBtn.module.css'

const ReturnButton = () => {
  return (
    <Link href="/" className={styles.returnContainer}>
        <div className={styles.returnBox}>
        <FontAwesomeIcon icon={faReply} className={styles.returnIcon} />
        <p className={styles.returnText}>
            ホームに戻る
        </p>
        </div>
    </Link>
    )
}

export default ReturnButton

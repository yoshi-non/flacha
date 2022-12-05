import React from 'react'
import { useTime } from '../../hooks/useTime'
import DigitalClock from '../DigitalClock'
import styles from '../../styles/Home.module.css'

const Comment = () => {
  const time = useTime(1000)

  return (
    <div className={styles.commentBox}>
    <div className={styles.comments}>
      <div className={styles.comment}>コメント</div>
    </div>
    <div className={styles.commentTime}>
      <DigitalClock time={time}/>
    </div>
  </div>
  )
}

export default Comment

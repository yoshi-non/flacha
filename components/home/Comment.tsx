import { css } from '@emotion/react'
import React from 'react'
import { useTime } from '../../hooks/useTime'
import DigitalClock from '../DigitalClock'

const styles = {
  /* コメント */
  commentContainer: css`
    height: 100vh;
    display: flex;
    flex: 1;
    justify-content: center;
    align-content: center;
    align-items: center;
  `,

  commentBox: css`
    position: absolute;
    width: 454px;
    height: 600px;
    background-image: url(/images/bg_comment.png);
    background-size: cover;
    display: flex;
    justify-content: center;
  `,

  comments: css`
    position: absolute;
    max-height: 400px;
    width: 350px;
    bottom: 100px;
    overflow: hidden;
  `,

  comment: css`
    width: 100%;
    font-size: 1.4rem;
    font-weight: 900;
    padding: 5px;
  `,

  commentTime: css`
    position: absolute;
    width: 100%;
    font-size: 2.5rem;
    color: #fff3f8;
    text-align: center;
    bottom: 10px;
  `,
}

const Comment = () => {
  const time = useTime(1000)

  return (
    <div css={styles.commentBox}>
    <div css={styles.comments}>
      <div css={styles.comment}>コメント</div>
    </div>
    <div css={styles.commentTime}>
      <DigitalClock time={time}/>
    </div>
  </div>
  )
}

export default Comment

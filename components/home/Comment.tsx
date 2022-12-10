import { css } from '@emotion/react'
import React, { useState } from 'react'
import { useTime } from '../../hooks/useTime'
import DigitalClock from '../DigitalClock'
import io from "socket.io-client"
import Image from 'next/image'
import { SERVER } from '../../pages/api/server'

const socket = io(SERVER ? SERVER : "localhost:5000")

// @ts-ignore
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
    max-height: 440px;
    width: 350px;
    bottom: 100px;
    display: flex;
    flex-direction: column;
    align-content: flex-end;
  `,

  chatBox: css`
    font-size: 1.5rem;
    font-weight: 600;
    max-height: 400px;
    width: 100%;
    overflow-y: scroll;
    ::-webkit-scrollbar{
      display: none;
    }
  `,

  commentInputBox: css`
    width: 100%;
    font-weight: 900;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  `,

  commentInput: css`
    font-size: 1.4rem;
    font-weight: 600;
    border-bottom: 1px solid #4f4f4f4f;
    caret-color: #8187fa;
    width: 300px;
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
  const [message, setMessage] = useState<string>("")
  const [list, setList] = useState<string[]>([]);
  const time = useTime(1000)
  
  const handleSendMessage = () => {
    // サーバーへ送信
    socket.emit("send_message", {message: message})
  }

  //サーバーから受信
  socket.on("received_message", (data) => {
    let newData: string[] = [...list, data]
    setList(newData);
  })
  
  return (
    <div css={styles.commentBox}>
    <div css={styles.comments}>
      <div css={styles.chatBox}>
        {list.map((chat: any) => (
          <div key={chat.message}>
            <p>{chat.message}</p>
          </div>
        ))}
      </div>
      <div css={styles.commentInputBox}>
        <input
          type="text"
          placeholder='メッセージを入力...'
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          css={styles.commentInput}
        />
        <button onClick={() => {
          handleSendMessage()
          setMessage("")
        }}>
          <Image
            src={'/images/message-icon.png'}
            alt={'送信'}
            height={30}
            width={30}
          />
        </button>
      </div>
    </div>
    <div css={styles.commentTime}>
      <DigitalClock time={time}/>
    </div>
  </div>
  )
}

export default Comment

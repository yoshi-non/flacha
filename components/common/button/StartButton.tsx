import React from "react";
import { css } from "@emotion/react";

const styles = {
    /* Startボタン */
    startBox: css`
      margin: 0 auto;
      flex: 2;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
    `,
    startBtn: css`
      font-weight: 600;
      font-size: 2rem;
      padding: 7px 10px;
      cursor: pointer;
      color: rgb(90, 80, 65);
      background-color: rgb(255, 196, 0);
      border-top: 1px solid rgba(255, 255, 255, 0.5);
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      border-left: 3px solid white;
      border-right: 3px solid white;
      border-radius: 10px;
      transition: 0.4s;
      &:hover {
        scale: 1.2;
      }
    `,
  };
  
  const StartButton = ({ setCountFlg, setCountdown }: any) => {
  return (
    <button
      css={styles.startBox}
      onClick={() => {
        setCountFlg(true);
        setCountdown(3);
      }}
    >
      <p css={styles.startBtn}>START</p>
    </button>
  );
};

export default StartButton;

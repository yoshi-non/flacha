import { css } from '@emotion/react'
import Link from 'next/link'
import React, { useState } from 'react'
import ReturnButton from '../components/common/button/ReturnButton'
import StartButton from '../components/common/button/StartButton'
import Layout from '../components/common/layout'
import SelectDigitSetting from '../components/common/select/SelectDigitSetting'
import SelectQuestionSetting from '../components/common/select/SelectQuestionSetting'

const styles = {
  /* -----  Chatモードページ  ----- */

  container: css`
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,

  /* メインコンテンツ */

  selectContainer: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 50px;
  `,

  selectBoxHr: css`
    height: 10px;
    width: 100%;
    background-color: #2f2f2f52;
  `,

  selectBox: css`
    margin: 10px 0;
    padding: 20px 0;
    background-color: #2f2f2f52;
  `,
}

const Chat = () => {
  const [selectQuestionValue,setSelectQuestionValue] = useState<number>(10)
  const [selectDigitValue,setSelectDigitValue] = useState<number>(5)

  return (
    <Layout>
      <ReturnButton/>
      <div css={styles.container}>

        <div>
          <div css={styles.selectContainer}>
            <div css={styles.selectBoxHr}></div>
            <div css={styles.selectBox}>
              <SelectQuestionSetting setSelectQuestionValue={setSelectQuestionValue}/>
              <SelectDigitSetting setSelectDigitValue={setSelectDigitValue}/>
            </div>
            <div css={styles.selectBoxHr}></div>
          </div>

          <StartButton/>
        </div>

      </div>
    </Layout>
  )
}

export default Chat
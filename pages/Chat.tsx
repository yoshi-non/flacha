import Link from 'next/link'
import React, { useState } from 'react'
import ReturnButton from '../components/common/button/ReturnButton'
import StartButton from '../components/common/button/StartButton'
import Layout from '../components/common/layout'
import SelectDigitSetting from '../components/common/select/SelectDigitSetting'
import SelectQuestionSetting from '../components/common/select/SelectQuestionSetting'
import styles from '../styles/Chat.module.css'

const Chat = () => {
  const [selectQuestionValue,setSelectQuestionValue] = useState<number>(10)
  const [selectDigitValue,setSelectDigitValue] = useState<number>(5)

  return (
    <Layout>
      <ReturnButton/>
      <div className={styles.container}>

        <div>
          <div className={styles.selectContainer}>
            <div className={styles.selectBoxHr}></div>
            <div className={styles.selectBox}>
              <SelectQuestionSetting setSelectQuestionValue={setSelectQuestionValue}/>
              <SelectDigitSetting setSelectDigitValue={setSelectDigitValue}/>
            </div>
            <div className={styles.selectBoxHr}></div>
          </div>

          <StartButton/>
        </div>

      </div>
    </Layout>
  )
}

export default Chat
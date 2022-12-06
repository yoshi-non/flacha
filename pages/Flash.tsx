import React, { useState } from 'react'
import ReturnButton from '../components/common/button/ReturnButton'
import StartButton from '../components/common/button/StartButton'
import Layout from '../components/common/layout'
import SelectDigitSetting from '../components/common/select/SelectDigitSetting'
import SelectQuestionSetting from '../components/common/select/SelectQuestionSetting'
import SelectTimeSetting from '../components/common/select/SelectTimeSetting'
import styles from '../styles/Flash.module.css'

const Flash = () => {
  const [selectTimeValue,setSelectTimeValue] = useState<number>(1)
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
              <SelectTimeSetting setSelectTimeValue={setSelectTimeValue}/>
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

export default Flash
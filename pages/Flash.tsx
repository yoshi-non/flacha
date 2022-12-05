import Link from 'next/link'
import React, { useState } from 'react'
import Layout from '../components/common/layout'
import SelectDigitSetting from '../components/flash/SelectDigitSetting'
import SelectQuestionSetting from '../components/flash/SelectQuestionSetting'
import SelectTimeSetting from '../components/flash/SelectTimeSetting'
import styles from '../styles/Flash.module.css'

const Flash = () => {
  const [selectTimeValue,setSelectTimeValue] = useState<number>(1)
  const [selectQuestionValue,setSelectQuestionValue] = useState<number>(10)
  const [selectDigitValue,setSelectDigitValue] = useState<number>(5)

  return (
    <Layout>
      <Link href="/">ホームに戻る</Link>
      <div className={styles.container}>
        <main className={styles.main}>
          <SelectTimeSetting setSelectTimeValue={setSelectTimeValue}/>
          <SelectQuestionSetting setSelectQuestionValue={setSelectQuestionValue}/>
          <SelectDigitSetting setSelectDigitValue={setSelectDigitValue}/>
        </main>
      </div>
    </Layout>
  )
}

export default Flash
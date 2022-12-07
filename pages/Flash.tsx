import React, { useEffect, useState } from 'react'
import ReturnButton from '../components/common/button/ReturnButton'
import StartButton from '../components/common/button/StartButton'
import Layout from '../components/common/layout'
import SelectDigitSetting from '../components/common/select/SelectDigitSetting'
import SelectQuestionSetting from '../components/common/select/SelectQuestionSetting'
import SelectTimeSetting from '../components/common/select/SelectTimeSetting'
import styles from '../styles/Flash.module.css'
import { motion } from 'framer-motion'
import { fadeInUp } from '../animations/variants'


const Flash = () => {
  const [selectTimeValue,setSelectTimeValue] = useState<number>(1)
  const [selectQuestionValue,setSelectQuestionValue] = useState<number>(10)
  const [selectDigitValue,setSelectDigitValue] = useState<number>(5)

  const [countdown, setCountdown] = useState<string | number>(0) //カウントダウン数
  const [countFlg, setCountFlg] = useState(false) //カウントしてるかフラグ
  const [playFlg, setPlayFlg] = useState(false) //プレイしてるかフラグ
  const [resultFlg, setResultFlg] = useState(false) //結果画面を表示してるかフラグ

  useEffect(() => {
    let sampleInterval = setInterval(() => {
      if (countdown > 0) {
        if (countdown === 3){
          setTimeout(function(){
            setCountdown(Number(countdown) - 1)
          },500);
        } else{
          setCountdown(Number(countdown) - 1)
        }
      }
      if (countdown === 1) {
        setCountdown("START")
        clearInterval(sampleInterval)
      }
    }, 1000);
    return () => {
      clearInterval(sampleInterval)
    }
  })

  return (
    <Layout>
      <ReturnButton/>

      {/* 設定画面 */}
      <div className={styles.container}>
        {!countFlg && !playFlg && !resultFlg && (
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

            <StartButton
              setCountFlg={setCountFlg}
              setCountdown={setCountdown}
            />
          </div>
        )}

        {/* カウントダウン画面 */}
        {countFlg && !playFlg && !resultFlg && (
          <motion.div
            className={styles.countContainer}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <p className={styles.countBox}>
              {countdown}
            </p>
          </motion.div>
        )}
      </div>

    </Layout>
  )
}

export default Flash
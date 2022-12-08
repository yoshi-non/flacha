/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import ReturnButton from '../components/common/button/ReturnButton'
import StartButton from '../components/common/button/StartButton'
import Layout from '../components/common/layout'
import SelectDigitSetting from '../components/common/select/SelectDigitSetting'
import SelectQuestionSetting from '../components/common/select/SelectQuestionSetting'
import SelectTimeSetting from '../components/common/select/SelectTimeSetting'
import styles from '../styles/Flash.module.css'
import { motion } from 'framer-motion'
import { fadeInPopup, fadeInUp } from '../animations/variants'
import Image from 'next/image'

const Flash = () => {
  const [selectTimeValue,setSelectTimeValue] = useState<number>(1) //スパチャが切り替わる速度
  const [selectQuestionValue,setSelectQuestionValue] = useState<number>(10) //スパチャの数
  const [selectDigitValue,setSelectDigitValue] = useState<number>(5) //桁数

  const [countdown, setCountdown] = useState<string | number>("") //カウントダウン数
  const [countFlg, setCountFlg] = useState(false) //カウントしてるかフラグ
  const [playFlg, setPlayFlg] = useState(false) //プレイしてるかフラグ
  const [resultFlg, setResultFlg] = useState(false) //結果画面を表示してるかフラグ

  // カウントダウン処理
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
        // STARTが表示されて1秒後にゲームスタート
        setTimeout(function(){
          setCountFlg(false)
          setPlayFlg(true)
        },1000);
        clearInterval(sampleInterval)
      }
    }, 1000);
    return () => {
      clearInterval(sampleInterval)
    }
  }, [countdown])

  // ランダム名前配列
  const arrRandomName = ["となりのハッカソン", "あの日立てた鯖の名前を僕たちはまだ知らない", "通信竜インターネットドラゴン", "ぺーこぺこぺこ", "遅延廻戦"]
  // ランダムコメント配列
  const arrRandomComment = ["となりのハッカソン", "あの日立てた鯖の名前を僕たちはまだ知らない", "通信竜インターネットドラゴン", "ぺーこぺこぺこ", "遅延廻戦"]

  // プレイで使用する"名前"データ配列
  const [arrPlayName, setArrPlayName] = useState<string[]>()
  const defineArrPlayName = () => {
    const arr: string[] = []
    for (let i = 0; i < selectQuestionValue; i++ ) {
      const randomName = arrRandomName[Math.floor(Math.random() * arrRandomName.length)]
      arr.push(randomName)
    }
    setArrPlayName(arr)
  }
  // プレイで使用する"スパチャの色"データ配列
  const arrPlayTopColor: string[] = []
  const arrPlayBottomColor: string[] = []

  // プレイで使用する"金額"データ配列
  let Min: number,Max: number
  const [arrPlayValue, setArrPlayValue] = useState<number[]>()
  const defineArrPlayValue = () => {
    const arr: number[] = []
    for (let i = 0; i < selectQuestionValue; i++ ) {
      switch (selectDigitValue) {
        case 1:
          Min = 1
          Max = 9
          break;
        case 2:
          Min = 10
          Max = 99
          break;
        case 3:
          Min = 100
          Max = 999
          break;
        case 4:
          Min = 1000
          Max = 9999
          break;
        case 5:
          Min = 10000
          Max = 50000
          break;
        default:
          break;
      }
      let randomValue = Math.floor( Math.random() * ( (Max+1) - Min ) + Min );
      arr.push(randomValue)
      // 金額に応じてスパチャの色を指定
      if(randomValue < 200){
        arrPlayTopColor?.push("")
        arrPlayBottomColor?.push("")
      }
      if(randomValue >= 200 && randomValue < 500){
        arrPlayTopColor?.push("")
        arrPlayBottomColor?.push("")
      }
      if(randomValue >= 500 && randomValue < 1000){
        arrPlayTopColor?.push("")
        arrPlayBottomColor?.push("")
      }
      if(randomValue >= 1000 && randomValue < 2000){
        arrPlayTopColor?.push("")
        arrPlayBottomColor?.push("")
      }
      if(randomValue >= 2000 && randomValue < 5000){
        arrPlayTopColor?.push("")
        arrPlayBottomColor?.push("")
      }
      if(randomValue >= 5000 && randomValue < 10000){
        arrPlayTopColor?.push("")
        arrPlayBottomColor?.push("")
      }
      if(randomValue >= 10000){
        arrPlayTopColor?.push("rgb(206, 0, 0)")
        arrPlayBottomColor?.push("rgb(255, 0, 0)")
      }
    }
    setArrPlayValue(arr)
  }

  // プレイで使用する"コメント"データ配列
  const [arrPlayComment, setArrPlayComment] = useState<string[]>()
  const defineArrPlayComment = () => {
    const arr: string[] = []
    for (let i = 0; i < selectQuestionValue; i++ ) {
      const randomComment = arrRandomComment[Math.floor(Math.random() * arrRandomComment.length)]
      arr.push(randomComment)
    }
    setArrPlayComment(arr)
  }

  const playStart = () => {
    defineArrPlayName()
    defineArrPlayValue()
    defineArrPlayComment()
  }

  const [showPlayName, setShowPlayName] = useState("")
  const [showPlayValue, setShowPlayValue] = useState(0)
  const [showPlayComment, setShowPlayComment] = useState("")

  // プレイ処理
  const [playCount, setPlayCount] = useState(0)
  useEffect(() => {
    if (arrPlayName){
      setShowPlayName(arrPlayName[playCount])
    }
    if (arrPlayValue){
      setShowPlayValue(arrPlayValue[playCount])
    }
    if (arrPlayComment){
      setShowPlayComment(arrPlayComment[playCount])
    }
    let sampleInterval = setInterval(() => {
      if (selectQuestionValue > 1 && playFlg) {
        setSelectQuestionValue(selectQuestionValue - 1)
        setPlayCount(playCount + 1)
      }
      if (selectQuestionValue === 1 && playFlg) {
        // setCountdown("FINISH")
        // FINISHが表示されて1秒後に結果画面を表示
        setTimeout(function(){
          setResultFlg(true)
          setPlayFlg(false)
        },1000);
        clearInterval(sampleInterval)
      }
    }, selectTimeValue*1000);
    return () => {
      clearInterval(sampleInterval)
    }
  }, [selectQuestionValue, playFlg])
  
  const [answerFlg, setAnswerFlg] = useState(true)
  // ユーザーが解答する数値
  const [answerText, setAnswerText] = useState<number>()
  // 解答の数値
  const [answer, setAnswer] = useState<number>()
  // 正解判定フラグ
  const [correctFlg, setCorrectFlg] = useState(false)

  // 解答処理
  const handleAnswerCheck = () => {
    let answer:number = 0
    if (arrPlayValue){
      const sum = function(arr: number[]) {
        let total = 0;
        for (var i = 0, len = arr.length; i < len; i++) total += arr[i];
        return total;
      };
      answer = sum(arrPlayValue)
      setAnswer(answer)
    }
    if (answerText == answer) {
      // 正解のときの処理
      setCorrectFlg(true)
    } else {
      // 不正解のときの処理
      setCorrectFlg(false)
    }
    setAnswerFlg(false)
  }

  // リセット処理
  const resetGame = () => {
    setSelectQuestionValue(10)
    setCountdown("")
    setCountFlg(false)
    setPlayFlg(false)
    setResultFlg(false)
    setArrPlayName([])
    setArrPlayValue([])
    setArrPlayComment([])
    setPlayCount(0)
    setAnswerFlg(true)
    setAnswerText(0)
    setAnswer(0)
    setCorrectFlg(false)
  }

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

            <div className={styles.startButtonContainer}>
              <div
                onClick={() => playStart()}
              >
                <StartButton
                  setCountFlg={setCountFlg}
                  setCountdown={setCountdown}
                />
              </div>
            </div>
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

        {/* プレイ画面 */}
        {!countFlg && playFlg && !resultFlg && (
          <div className={styles.playContainer}>
            <div className={styles.playTopBox}>
              <Image
                src='/images/user/user-icon.png'
                width={100}
                height={100}
                alt={'ユーザー'}
                className={styles.supUserIcon}
              />
              <div>
                <div className={styles.supName}>{showPlayName}</div>
                <div className={styles.supValue}>￥{showPlayValue}</div>
              </div>
            </div>
            <div className={styles.playBottomBox}>
              <p className={styles.supComment}>
                {showPlayComment}
              </p>
            </div>
          </div>
        )}

        {/* 結果画面 */}
        {!countFlg && !playFlg && resultFlg && (
          <div className={styles.resultContainer}>
            {answerFlg ? (
              <div className={styles.answerContainer}>
                <p className={styles.answerTitle}>答えは?</p>
                <div className={styles.answerInputBox}>
                  <input
                    type="number"
                    min="0"
                    // max="1000000"
                    onChange={(e) => setAnswerText(e.target.value)}
                    value={answerText}
                    className={styles.answerInput}
                  />
                  <label className={styles.answerDefineLabel}>
                    <input
                      type="submit"
                      onClick={() => {handleAnswerCheck()}}
                      value={"OK"}
                      className={styles.answerDefineBtn}
                    />
                    OK
                  </label>
                </div>
              </div>
            ) : (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInPopup}
                className={styles.correctContainer}
              >
                {correctFlg ? (
                  <div className={styles.correctTitle}>正解!</div>
                ) : (
                  <div className={styles.correctTitle}>不正解😭</div>
                )}
                <div className={styles.correctBox}>
                  <p className={styles.correctLeft}>あなたの解答:</p>
                  <p className={styles.correctRight}>{answerText}</p>
                </div>
                <div className={styles.correctBox}>
                  <p className={styles.correctLeft}>答え:</p>
                  <p className={styles.correctRight}>{answer}</p>
                </div>
                <button className={styles.againBtn} onClick={() => resetGame()}>もう一度遊ぶ</button>
              </motion.div>
            )}
          </div>
        )}

      </div>

    </Layout>
  )
}

export default Flash
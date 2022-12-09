/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import ReturnButton from '../components/common/button/ReturnButton'
import StartButton from '../components/common/button/StartButton'
import Layout from '../components/common/layout'
import SelectDigitSetting from '../components/common/select/SelectDigitSetting'
import SelectQuestionSetting from '../components/common/select/SelectQuestionSetting'
import SelectTimeSetting from '../components/common/select/SelectTimeSetting'
import { motion } from 'framer-motion'
import { fadeInPopup, fadeInUp } from '../animations/variants'
import Image from 'next/image'
import { css } from '@emotion/react'

const styles = {
  /* -----  Flashモードページ  ----- */

  container: css`
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,

  /* 設定選択画面 */

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

  /* StartBtn */
  startButtonContainer: css`
    width: max-content;
    margin: 0 auto;
  `,

  /* カウントダウン画面 */
  countContainer: css`
    width: 1000px;
    min-height: 500px;
    margin: 0 auto;
    background-color: #2f2f2f52;
    border-radius: 50px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 5px white;
  `,

  countBox: css`
    color: white;
    font-size: 6rem;
    font-weight: 600;
    text-shadow: 0px 0px 5px #8187fa;
  `,

  /* プレイ画面 */
  playContainer: css`
    width: 1000px;
    min-height: 500px;
    margin: 0 auto;
    background-color: #2f2f2f52;
    border-radius: 50px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 5px white;
  `,

  playTopBox: css`
    padding: 30px;
    width: 100%;
    /* background-color: rgb(206, 0, 0); */
    display: flex;
    align-items: center;
    gap: 30px;
  `,

  playBottomBox: css`
    flex: 1;
    padding: 30px;
    width: 100%;
    /* background-color: rgb(255, 0, 0); */
    font-size: 2rem;
  `,

  supUserIcon: css`
    overflow: hidden;
    background-color: white;
    border-radius: 100%;
    object-fit: cover;
  `,

  supName: css`
    font-size: 1.5rem;
    color: rgb(228, 228, 228);
    text-shadow: 0 0 0px 2px black;
  `,

  supValue: css`
    font-size: 1.8rem;
    font-weight: 600;
    color: white;
    text-shadow: 0 0 0 2px black;
  `,

  supComment: css`
    color: white;
    text-shadow: 0 0 0 1px black;
  `,

  /* 結果画面 */
  resultContainer: css`
    width: 1000px;
    min-height: 500px;
    margin: 0 auto;
    background-color: #2f2f2f52;
    border-radius: 50px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 5px white;
  `,

  answerTitle: css`
    text-align: center;
    color: white;
    font-weight: 600;
    font-size: 3.4rem;
    margin-bottom: 20px;
  `,

  answerInputBox: css`
    border-radius: 10px;
    display: flex;
    justify-content: center;
  `,

  answerInput: css`
    font-size: 2rem;
    padding: 20px;
    font-weight: 600;
    border-radius: 20px 0px 0px 20px;
    caret-color: #8187fa;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      -moz-appearance: textfield;
    }

    &:focus {
      outline: none;
    }
  `,

  answerDefineLabel: css`
    font-size: 2rem;
    padding: 10px 30px;
    font-weight: 600;
    border-radius: 0px 20px 20px 0px;
    border: 3px solid white;
    color: white;
    background-color: #8187fa;
  `,

  answerDefineBtn: css`
    display: none;
  `,

  /* "正解・不正解"結果画面 */
  correctContainer: css`
    color: white;
    font-weight: 600;
    font-size: 2rem;
    text-align: center;
  `,

  correctTitle: css`
    font-size: 3rem;
    margin-bottom: 20px;
  `,

  correctBox: css`
    display: flex;
  `,

  correctLeft: css`
    width: 210px;
    text-align: right;
  `,

  /* もう一度遊ぶボタン */
  againBtn: css`
    margin-top: 30px;
    font-weight: 600;
    font-size: 1.6rem;
    padding: 13px 20px;
    cursor: pointer;
    color: white;
    background-color: #8187fa;
    box-shadow: 0 0 5px white;
    border-radius: 10px;
    transition: 0.4s;

    &:hover {
      scale: 1.2;
    }
  `,
}

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
  const [arrPlayTopColor, setArrPlayTopColor] = useState<string[]>()
  const [arrPlayBottomColor,setArrPlayBottomColor] = useState<string[]>()

  // プレイで使用する"金額"データ配列
  let Min: number,Max: number
  const [arrPlayValue, setArrPlayValue] = useState<number[]>()
  const defineArrPlayValue = () => {
    const arr: number[] = []
    const arrTopColor: string[] = []
    const arrBottomColor: string[] = []
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
        arrTopColor.push("rgb(0, 0, 184)")
        arrBottomColor.push("rgb(0, 0, 255)")
      }
      if(randomValue >= 200 && randomValue < 500){
        arrTopColor.push("rgb(0, 101, 159)")
        arrBottomColor.push("rgb(0, 162, 255)")
      }
      if(randomValue >= 500 && randomValue < 1000){
        arrTopColor.push("rgb(0, 96, 66)")
        arrBottomColor.push("rgb(23, 196, 130)")
      }
      if(randomValue >= 1000 && randomValue < 2000){
        arrTopColor.push("rgb(217, 149, 23)")
        arrBottomColor.push("rgb(255, 191, 0)")
      }
      if(randomValue >= 2000 && randomValue < 5000){
        arrTopColor.push("rgb(206, 120, 0)")
        arrBottomColor.push("rgb(255, 162, 32)")
      }
      if(randomValue >= 5000 && randomValue < 10000){
        arrTopColor?.push("rgb(138, 0, 71)")
        arrBottomColor.push("rgb(196, 0, 101)")
      }
      if(randomValue >= 10000){
        arrTopColor.push("rgb(206, 0, 0)")
        arrBottomColor.push("rgb(255, 0, 0)")
      }
    }
    setArrPlayValue(arr)
    setArrPlayTopColor(arrTopColor)
    setArrPlayBottomColor(arrBottomColor)
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
  const [showPlayTopColor, setShowPlayTopColor] = useState("")
  const [showPlayBottomColor, setShowPlayBottomColor] = useState("")
  


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
    if (arrPlayTopColor){
      setShowPlayTopColor(arrPlayTopColor[playCount])
    }
    if (arrPlayBottomColor){
      setShowPlayBottomColor(arrPlayBottomColor[playCount])
    }
    let sampleInterval = setInterval(() => {
      if (selectQuestionValue > 1 && playFlg) {
        setSelectQuestionValue(selectQuestionValue - 1)
        setPlayCount(playCount + 1)
      }
      if (selectQuestionValue === 1 && playFlg) {
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
  const [answerText, setAnswerText] = useState<number | void>()
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
    setAnswerText()
    setAnswer(0)
    setCorrectFlg(false)
  }

  console.log(showPlayTopColor)
  return (
    <Layout>
      <ReturnButton/>

      {/* 設定画面 */}
      <div css={styles.container}>
        {!countFlg && !playFlg && !resultFlg && (
          <div>
            <div css={styles.selectContainer}>
              <div css={styles.selectBoxHr}></div>
              <div css={styles.selectBox}>
                <SelectTimeSetting setSelectTimeValue={setSelectTimeValue}/>
                <SelectQuestionSetting setSelectQuestionValue={setSelectQuestionValue}/>
                <SelectDigitSetting setSelectDigitValue={setSelectDigitValue}/>
              </div>
              <div css={styles.selectBoxHr}></div>
            </div>

            <div css={styles.startButtonContainer}>
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
            css={styles.countContainer}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <p css={styles.countBox}>
              {countdown}
            </p>
          </motion.div>
        )}

        {/* プレイ画面 */}
        {!countFlg && playFlg && !resultFlg && (
          <div css={styles.playContainer}>
            <div css={styles.playTopBox} style={{background: showPlayTopColor}}>
              <Image
                src='/images/user/user-icon.png'
                width={100}
                height={100}
                alt={'ユーザー'}
                css={styles.supUserIcon}
              />
              <div>
                <div css={styles.supName}>{showPlayName}</div>
                <div css={styles.supValue}>￥{showPlayValue}</div>
              </div>
            </div>
            <div css={styles.playBottomBox} style={{background: showPlayBottomColor}}>
              <p css={styles.supComment}>
                {showPlayComment}
              </p>
            </div>
          </div>
        )}

        {/* 結果画面 */}
        {!countFlg && !playFlg && resultFlg && (
          <div css={styles.resultContainer}>
            {answerFlg ? (
              <div>
                <p css={styles.answerTitle}>答えは?</p>
                <div css={styles.answerInputBox}>
                  <input
                    type="number"
                    min="0"
                    // max="1000000"
                    onChange={(e) => setAnswerText(Number(e.target.value))}
                    value={Number(answerText)}
                    css={styles.answerInput}
                  />
                  <label css={styles.answerDefineLabel}>
                    <input
                      type="submit"
                      onClick={() => {handleAnswerCheck()}}
                      value={"OK"}
                      css={styles.answerDefineBtn}
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
                css={styles.correctContainer}
              >
                {correctFlg ? (
                  <div css={styles.correctTitle}>正解!</div>
                ) : (
                  <div css={styles.correctTitle}>不正解😭</div>
                )}
                <div css={styles.correctBox}>
                  <p css={styles.correctLeft}>あなたの解答:</p>
                  <p>{Number(answerText)}</p>
                </div>
                <div css={styles.correctBox}>
                  <p css={styles.correctLeft}>答え:</p>
                  <p>{answer}</p>
                </div>
                <button css={styles.againBtn} onClick={() => resetGame()}>もう一度遊ぶ</button>
              </motion.div>
            )}
          </div>
        )}

      </div>

    </Layout>
  )
}

export default Flash
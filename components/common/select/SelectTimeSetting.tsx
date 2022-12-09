import React, { useState } from 'react'
import { css } from '@emotion/react'

const styles = {
  /* Selectボタンコンポーネント */
  btnBox: css`
    width: 1000px;
    margin: 30px auto;
    display: flex;
    font-size: 1.4rem;
  `,
  btnTitle: css`
    color: rgb(255, 255, 255);
    text-shadow: 1px 2px 3px #2f2f2f;
    flex: 1;
    padding: 5px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `,
  btnBlock: css`
    flex: 3;
    padding: 5px;
    display: flex;
    gap: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `,
  curSelectBtn: css`
    font-weight: 600;
    cursor: pointer;
    text-align: center;
    min-width: 100px;
    padding: 2px 10px;
    border-top: 5px solid rgba(89, 89, 89, 0.5);
    border-bottom: 5px solid rgba(89, 89, 89, 0.5);
    border-left: 1px solid rgba(89, 89, 89, 0.5);
    border-right: 1px solid rgba(89, 89, 89, 0.5);
    border-radius: 10px;
    transition: 0.3s;
    color: #8187fa;
    background-color: #fff3f8;
  `,
  selectBtn: css`
    font-weight: 600;
    cursor: pointer;
    text-align: center;
    min-width: 100px;
    padding: 2px 10px;
    border-top: 5px solid rgba(89, 89, 89, 0.5);
    border-bottom: 5px solid rgba(89, 89, 89, 0.5);
    border-left: 1px solid rgba(89, 89, 89, 0.5);
    border-right: 1px solid rgba(89, 89, 89, 0.5);
    border-radius: 10px;
    transition: 0.3s;
    color: #fff3f8;
    background-color: #8187fa;
    &:hover {
      opacity: 0.7;
    }
  `,
}

const SelectTimeSetting = ({setSelectTimeValue}: any) => {
    const [selectBtnValue0,setSelectBtnValue0] = useState(false)
    const [selectBtnValue1,setSelectBtnValue1] = useState(true)
    const [selectBtnValue2,setSelectBtnValue2] = useState(false)
    const [selectBtnValue3,setSelectBtnValue3] = useState(false)
  
    const changeCurSelectBtn0 = () => {
        // 0を押されたときの処理
        setSelectTimeValue(0.5)
        setSelectBtnValue0(true)
        setSelectBtnValue1(false)
        setSelectBtnValue2(false)
        setSelectBtnValue3(false)
    }
    const changeCurSelectBtn1 = () => {
        // 1を押されたときの処理
        setSelectTimeValue(1)
        setSelectBtnValue0(false)
        setSelectBtnValue1(true)
        setSelectBtnValue2(false)
        setSelectBtnValue3(false)
    }
    const changeCurSelectBtn2 = () => {
        // 2を押されたときの処理
        setSelectTimeValue(2)
        setSelectBtnValue0(false)
        setSelectBtnValue1(false)
        setSelectBtnValue2(true)
        setSelectBtnValue3(false)
    }
    const changeCurSelectBtn3 = () => {
        // 3を押されたときの処理
        setSelectTimeValue(3)
        setSelectBtnValue0(false)
        setSelectBtnValue1(false)
        setSelectBtnValue2(false)
        setSelectBtnValue3(true)
    }
    
  return (
    <div css={styles.btnBox}>
      <div css={styles.btnTitle}>
        長考時間/1問:
      </div>
      <div css={styles.btnBlock}>
        {selectBtnValue0 ? (
          <div css={styles.curSelectBtn}>0.5秒</div>
        ) : (
          <div
            css={styles.selectBtn}
            onClick={() => changeCurSelectBtn0()}
          >0.5秒</div>
        )}
        {selectBtnValue1 ? (
          <div css={styles.curSelectBtn}>1秒</div>
        ) : (
          <div
            css={styles.selectBtn}
            onClick={() => changeCurSelectBtn1()}
          >1秒</div>
        )}
        {selectBtnValue2 ? (
          <div css={styles.curSelectBtn}>2秒</div>
        ) : (
          <div
            css={styles.selectBtn}
            onClick={() => changeCurSelectBtn2()}
          >2秒</div>
        )}
        {selectBtnValue3 ? (
          <div css={styles.curSelectBtn}>3秒</div>
        ) : (
          <div
            css={styles.selectBtn}
            onClick={() => changeCurSelectBtn3()}
          >3秒</div>
        )}
      </div>
    </div>
  )
}

export default SelectTimeSetting

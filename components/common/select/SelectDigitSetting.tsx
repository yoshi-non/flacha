import { css } from '@emotion/react'
import React, { useState } from 'react'

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

const SelectDigitSetting = ({setSelectDigitValue}: any) => {
    const [selectBtnValue0,setSelectBtnValue0] = useState(false)
    const [selectBtnValue1,setSelectBtnValue1] = useState(false)
    const [selectBtnValue2,setSelectBtnValue2] = useState(false)
    const [selectBtnValue3,setSelectBtnValue3] = useState(false)
    const [selectBtnValue4,setSelectBtnValue4] = useState(true)
  
    const changeCurSelectBtn0 = () => {
        // 0を押されたときの処理
        setSelectDigitValue(1)
        setSelectBtnValue0(true)
        setSelectBtnValue1(false)
        setSelectBtnValue2(false)
        setSelectBtnValue3(false)
        setSelectBtnValue4(false)
    }
    const changeCurSelectBtn1 = () => {
        // 1を押されたときの処理
        setSelectDigitValue(2)
        setSelectBtnValue0(false)
        setSelectBtnValue1(true)
        setSelectBtnValue2(false)
        setSelectBtnValue3(false)
        setSelectBtnValue4(false)
    }
    const changeCurSelectBtn2 = () => {
        // 2を押されたときの処理
        setSelectDigitValue(3)
        setSelectBtnValue0(false)
        setSelectBtnValue1(false)
        setSelectBtnValue2(true)
        setSelectBtnValue3(false)
        setSelectBtnValue4(false)
    }
    const changeCurSelectBtn3 = () => {
        // 3を押されたときの処理
        setSelectDigitValue(4)
        setSelectBtnValue0(false)
        setSelectBtnValue1(false)
        setSelectBtnValue2(false)
        setSelectBtnValue3(true)
        setSelectBtnValue4(false)
    }
    const changeCurSelectBtn4 = () => {
        // 3を押されたときの処理
        setSelectDigitValue(5)
        setSelectBtnValue0(false)
        setSelectBtnValue1(false)
        setSelectBtnValue2(false)
        setSelectBtnValue3(false)
        setSelectBtnValue4(true)
    }
    
  return (
    <div css={styles.btnBox}>
    <div css={styles.btnTitle}>
      桁数:
    </div>
    <div css={styles.btnBlock}>
      {selectBtnValue0 ? (
        <div css={styles.curSelectBtn}>1桁</div>
      ) : (
        <div
          css={styles.selectBtn}
          onClick={() => changeCurSelectBtn0()}
        >1桁</div>
      )}
      {selectBtnValue1 ? (
        <div css={styles.curSelectBtn}>2桁</div>
      ) : (
        <div
          css={styles.selectBtn}
          onClick={() => changeCurSelectBtn1()}
        >2桁</div>
      )}
      {selectBtnValue2 ? (
        <div css={styles.curSelectBtn}>3桁</div>
      ) : (
        <div
          css={styles.selectBtn}
          onClick={() => changeCurSelectBtn2()}
        >3桁</div>
      )}
      {selectBtnValue3 ? (
        <div css={styles.curSelectBtn}>4桁</div>
      ) : (
        <div
          css={styles.selectBtn}
          onClick={() => changeCurSelectBtn3()}
        >4桁</div>
      )}
      {selectBtnValue4 ? (
          <div css={styles.curSelectBtn}>5桁</div>
      ) : (
        <div
          css={styles.selectBtn}
          onClick={() => changeCurSelectBtn4()}
        >5桁</div>
      )}
    </div>
  </div>
)
}

export default SelectDigitSetting

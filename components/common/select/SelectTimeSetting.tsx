import React, { useState } from 'react'
import styles from '../../../styles/CommonBtn.module.css'

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
    <div className={styles.btnBox}>
      <div className={styles.btnTitle}>
        長考時間/1問:
      </div>
      <div className={styles.btnBlock}>
        {selectBtnValue0 ? (
          <div className={styles.curSelectBtn}>0.5秒</div>
        ) : (
          <div
            className={styles.selectBtn}
            onClick={() => changeCurSelectBtn0()}
          >0.5秒</div>
        )}
        {selectBtnValue1 ? (
          <div className={styles.curSelectBtn}>1秒</div>
        ) : (
          <div
            className={styles.selectBtn}
            onClick={() => changeCurSelectBtn1()}
          >1秒</div>
        )}
        {selectBtnValue2 ? (
          <div className={styles.curSelectBtn}>2秒</div>
        ) : (
          <div
            className={styles.selectBtn}
            onClick={() => changeCurSelectBtn2()}
          >2秒</div>
        )}
        {selectBtnValue3 ? (
          <div className={styles.curSelectBtn}>3秒</div>
        ) : (
          <div
            className={styles.selectBtn}
            onClick={() => changeCurSelectBtn3()}
          >3秒</div>
        )}
      </div>
    </div>
  )
}

export default SelectTimeSetting

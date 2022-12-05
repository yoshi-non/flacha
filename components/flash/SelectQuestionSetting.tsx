import React, { useState } from 'react'
import styles from '../../styles/Flash.module.css'

const SelectQuestionSetting = ({setSelectQuestionValue}: any) => {
    const [selectBtnValue0,setSelectBtnValue0] = useState(false)
    const [selectBtnValue1,setSelectBtnValue1] = useState(true)
    const [selectBtnValue2,setSelectBtnValue2] = useState(false)
    const [selectBtnValue3,setSelectBtnValue3] = useState(false)
  
    const changeCurSelectBtn0 = () => {
        // 0を押されたときの処理
        setSelectQuestionValue(5)
        setSelectBtnValue0(true)
        setSelectBtnValue1(false)
        setSelectBtnValue2(false)
        setSelectBtnValue3(false)
    }
    const changeCurSelectBtn1 = () => {
        // 1を押されたときの処理
        setSelectQuestionValue(10)
        setSelectBtnValue0(false)
        setSelectBtnValue1(true)
        setSelectBtnValue2(false)
        setSelectBtnValue3(false)
    }
    const changeCurSelectBtn2 = () => {
        // 2を押されたときの処理
        setSelectQuestionValue(15)
        setSelectBtnValue0(false)
        setSelectBtnValue1(false)
        setSelectBtnValue2(true)
        setSelectBtnValue3(false)
    }
    const changeCurSelectBtn3 = () => {
        // 3を押されたときの処理
        setSelectQuestionValue(20)
        setSelectBtnValue0(false)
        setSelectBtnValue1(false)
        setSelectBtnValue2(false)
        setSelectBtnValue3(true)
    }
    
  return (
    <div className={styles.btnBox}>
    <div className={styles.btnTitle}>
      出題数:
    </div>
    <div className={styles.btnBlock}>
      {selectBtnValue0 ? (
        <div className={styles.curSelectBtn}>5問</div>
      ) : (
        <div
          className={styles.selectBtn}
          onClick={() => changeCurSelectBtn0()}
        >5問</div>
      )}
      {selectBtnValue1 ? (
        <div className={styles.curSelectBtn}>10問</div>
      ) : (
        <div
          className={styles.selectBtn}
          onClick={() => changeCurSelectBtn1()}
        >10問</div>
      )}
      {selectBtnValue2 ? (
        <div className={styles.curSelectBtn}>15問</div>
      ) : (
        <div
          className={styles.selectBtn}
          onClick={() => changeCurSelectBtn2()}
        >15問</div>
      )}
      {selectBtnValue3 ? (
        <div className={styles.curSelectBtn}>20問</div>
      ) : (
        <div
          className={styles.selectBtn}
          onClick={() => changeCurSelectBtn3()}
        >20問</div>
      )}
    </div>
  </div>
)
}

export default SelectQuestionSetting

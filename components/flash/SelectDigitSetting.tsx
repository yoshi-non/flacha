import React, { useState } from 'react'
import styles from '../../styles/Flash.module.css'

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
    <div className={styles.btnBox}>
    <div className={styles.btnTitle}>
      桁数:
    </div>
    <div className={styles.btnBlock}>
      {selectBtnValue0 ? (
        <div className={styles.curSelectBtn}>1桁</div>
      ) : (
        <div
          className={styles.selectBtn}
          onClick={() => changeCurSelectBtn0()}
        >1桁</div>
      )}
      {selectBtnValue1 ? (
        <div className={styles.curSelectBtn}>2桁</div>
      ) : (
        <div
          className={styles.selectBtn}
          onClick={() => changeCurSelectBtn1()}
        >2桁</div>
      )}
      {selectBtnValue2 ? (
        <div className={styles.curSelectBtn}>3桁</div>
      ) : (
        <div
          className={styles.selectBtn}
          onClick={() => changeCurSelectBtn2()}
        >3桁</div>
      )}
      {selectBtnValue3 ? (
        <div className={styles.curSelectBtn}>4桁</div>
      ) : (
        <div
          className={styles.selectBtn}
          onClick={() => changeCurSelectBtn3()}
        >4桁</div>
      )}
      {selectBtnValue4 ? (
          <div className={styles.curSelectBtn}>5桁</div>
      ) : (
        <div
          className={styles.selectBtn}
          onClick={() => changeCurSelectBtn4()}
        >5桁</div>
      )}
    </div>
  </div>
)
}

export default SelectDigitSetting

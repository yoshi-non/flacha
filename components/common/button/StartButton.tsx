import React from 'react'
import styles from '../../../styles/CommonBtn.module.css'

const StartButton = ({setCountFlg, setCountdown}:any) => {
    return (
    <button
        className={styles.startBox}
        onClick={()=> {
            setCountFlg(true)
            setCountdown(3)
        }}
    >
        <p className={styles.startBtn}>START</p>
    </button>
    )
}

export default StartButton

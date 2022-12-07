import React from 'react'
import styles from '../../../styles/CommonBtn.module.css'

const StartButton = ({setCountFlg, setCountdown}:any) => {
    return (
    <div
        className={styles.startBox}
        onClick={()=> {
            setCountFlg(true)
            setCountdown(3)
        }}
    >
        <button className={styles.startBtn}>START</button>
    </div>
    )
}

export default StartButton

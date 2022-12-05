import Image from 'next/image'
import React from 'react'
import styles from '../styles/Credit.module.css'

type props = {
    title: string,
    description: string,
    href: string,
    src: string,
    linkText: string,
}

const ExternalLink = (props: props) => {
  return (
    <div className={styles.creditBox}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.description}>
            {props.description}
        </p>
        <div className={styles.linkBlock}>
            <a href={props.href} target="blank">
                <Image
                    src={props.src}
                    width={250}
                    height={110}
                    alt={'logo'}
                    className={styles.linkImg}
                />
                <p className={styles.linkText}>
                    {props.linkText}
                </p>
            </a>
        </div>
    </div>
)
}

export default ExternalLink

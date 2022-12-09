import { css } from '@emotion/react'
import Image from 'next/image'
import React from 'react'


const styles = {
    creditBox: css`
      height: 80vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      text-align: center;
      margin: 50px 0;
      color: #fff3f8;
      font-weight: 900;
      text-shadow: 1px 0 5px #3a44ff;
    `,
    title: css`
      font-size: 2.8rem;
    `,
    description: css`
      font-size: 1.4rem;
    `,
    linkBlock: css`
      margin: 50px auto;
      width: 250px;
      display: flex;
      flex-direction: column;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0px 0px 5px 3px #3a44ff;
      background-color: white;
      transition: 0.4s;
      &:hover {
        scale: 1.1;
      }
    `,
    linkImg: css`
      display: block;
      object-fit: cover;
    `,
    linkText: css`
      padding: 8px;
      color: white;
      text-decoration: underline;
      background-color: #8187fa;
    `,
}

type props = {
    title: string,
    description: string,
    href: string,
    src: string,
    linkText: string,
}

const ExternalLink = (props: props) => {
  return (
    <div css={styles.creditBox}>
        <p css={styles.title}>{props.title}</p>
        <p css={styles.description}>
            {props.description}
        </p>
        <div css={styles.linkBlock}>
            <a href={props.href} target="blank">
                <Image
                    src={props.src}
                    width={250}
                    height={110}
                    alt={'logo'}
                    css={styles.linkImg}
                />
                <p css={styles.linkText}>
                    {props.linkText}
                </p>
            </a>
        </div>
    </div>
)
}

export default ExternalLink

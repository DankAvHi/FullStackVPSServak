import React, { MouseEventHandler } from "react";

import styles from "./WhiteBoldButton.module.css";

type Props = {
     text: String;
     actionImage: string;
     onClick: MouseEventHandler;
};

export default function WhiteBoldButton({ text, actionImage, onClick }: Props) {
     return (
          <button className={styles.button} onClick={onClick}>
               <span className={styles.text}>{text}</span> <img className={styles.img} src={actionImage} alt="" />
          </button>
     );
}

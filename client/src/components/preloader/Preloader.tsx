import React, { useEffect, useState } from "react";
import { useScrollLock } from "../../hooks/scrollLock";
import { preloaderSlice } from "../../store/reducers/preloaderSlice";
import { useAppDispatch } from "./../../hooks/redux";
import WhiteBoldButton from "./../UI/buttons/WhiteBoldButton/WhiteBoldButton";
import appLogo from "./images/appLogo.png";
import rightArrowButton from "./images/rightArrow.png";
import styles from "./Preloader.module.css";
import { IPreloader } from "./../../interfaces/Preloader/IPreloader";

export default function Preloader() {
     const { lockScroll, unlockScroll } = useScrollLock();
     useEffect(() => {
          lockScroll();
     });

     const dispatch = useAppDispatch();
     const [isHidding, setIsHidding] = useState<IPreloader["isHidding"]>(false);
     const closePreloader = (): void => {
          setIsHidding(true);

          setTimeout(() => {
               dispatch(preloaderSlice.actions.closePreloader());
               localStorage.setItem("showPreloader", "false");
               unlockScroll();
          }, 1000);
     };

     return (
          <div className={styles.Preloader + " " + (!isHidding ? null : styles.hidding)}>
               <img draggable={false} className={styles.appLogo} src={appLogo} alt="appLogo" />
               <div className={styles.container}>
                    <h1 className={styles.heroText}>
                         There Is So Much App <br /> In Dynamic App
                    </h1>

                    <WhiteBoldButton text={"Open App"} actionImage={rightArrowButton} onClick={closePreloader} />
               </div>
          </div>
     );
}

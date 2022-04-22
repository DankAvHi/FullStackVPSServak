import React from "react";

type scrollLockType = {
     lockScroll: () => void;
     unlockScroll: () => void;
};

export const useScrollLock = (): scrollLockType => {
     const lockScroll: scrollLockType["lockScroll"] = React.useCallback(() => {
          document.body.style.overflow = "hidden";
          document.body.style.paddingRight = "17px";
     }, []);

     const unlockScroll: scrollLockType["unlockScroll"] = React.useCallback(() => {
          document.body.style.overflow = "";
          document.body.style.paddingRight = "0px";
     }, []);

     return {
          lockScroll,
          unlockScroll,
     };
};

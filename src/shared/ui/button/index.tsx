import { FC } from "react";
import { IButton } from "../../models/button";

import styles from "./index.module.css";

export const Button: FC<IButton> = ({ className, onClick, fav }) => {
  const buttonClass = className && styles.fav;

  return (
    <button onClick={onClick} className={buttonClass}>
      <svg
        width="40"
        height="37"
        viewBox="-2 -2 44 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 36.7L17.1 34.06C6.8 24.72 0 18.56 0 11C0 4.84 4.84 0 11 0C14.48 0 17.82 1.62 20 4.18C22.18 1.62 25.52 0 29 0C35.16 0 40 4.84 40 11C40 18.56 33.2 24.72 22.9 34.08L20 36.7Z"
          fill={fav ? "currentColor" : "none"}
          stroke="#F24E1E"
          strokeWidth="2"
        />
      </svg>
    </button>
  );
};

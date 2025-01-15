import { FC, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { OutletContextType } from "../../../shared/models/context";
import { Cat } from "../models";

import { Button } from "../../../shared/ui/button";

import styles from "./index.module.css";

export const CatsItem: FC<Cat> = ({ url, id }) => {
  const { handleFavoriteToggle, isCatFavorite } =
    useOutletContext<OutletContextType>();
  const [fav, setIsFav] = useState(false);

  const handleIsFav = () => {
    const cat = { url, id };
    handleFavoriteToggle(cat);
    setIsFav((prev) => !prev);
  };

  useEffect(() => {
    const fav = isCatFavorite(id);
    setIsFav(fav);
  }, []);

  return (
    <li className={styles.cats__item}>
      <div className={styles.cats__container}>
        <img className={styles.cats__img} src={url} alt={id} />
        <Button onClick={handleIsFav} className="fav" fav={fav} />
      </div>
    </li>
  );
};

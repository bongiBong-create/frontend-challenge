import clsx from "clsx";
import { useOutletContext } from "react-router-dom";
import { OutletContextType } from "../../shared/models/context";

import { CatsList } from "../../shared/ui/list";

import styles from "./index.module.css";

export const Favorite = () => {
  const { favoriteCats } = useOutletContext<OutletContextType>();

  return (
    <section className={clsx(styles.favorite, "container")}>
      {favoriteCats.length === 0 && (
        <h1 className="centered">Добавьте котиков</h1>
      )}
      <CatsList cats={favoriteCats} />
    </section>
  );
};

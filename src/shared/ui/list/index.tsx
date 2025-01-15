import { FC } from "react";
import { CatsItem } from "../../../entities/cat/ui";
import { CatList } from "../../models/list";

import styles from "./index.module.css";

export const CatsList: FC<CatList> = ({ cats }) => {

  return (
    <ul className={styles.cats__list}>
      {cats.map((cat) => (
        <CatsItem key={cat.id} url={cat.url} id={cat.id} />
      ))}
    </ul>
  );
};

import clsx from "clsx";
import { useRef } from "react";
import { useOutletContext } from "react-router-dom";
import { OutletContextType } from "../../shared/models/context";
import { useObserver } from "../../shared/hooks/useObserver";

import { Loader } from "../../shared/ui/loader";
import { CatsList } from "../../shared/ui/list";

import styles from "./index.module.css";

export const Home = () => {
  const { isLoading, cats, catsFetching, error } =
    useOutletContext<OutletContextType>();
  const lastElement = useRef<HTMLInputElement>(null);

  useObserver({
    ref: lastElement,
    isLoading: isLoading,
    callback: catsFetching,
    canload: error,
  });

  return (
    <section className={clsx(styles.cats, "container")}>
      <CatsList cats={cats} isLoading={isLoading} />

      {isLoading && <Loader />}

      {error && <h1 className="centered">{error}</h1>}

      {!isLoading && !error && (
        <div ref={lastElement} className={clsx("centered", styles.obs__el)}>
          ... загружаем еще котиков ...
        </div>
      )}
    </section>
  );
};

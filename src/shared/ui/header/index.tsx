import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

import styles from "./index.module.css";

export const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className="header-menu container">
        <nav className={styles["header-menu-list"]}>
          <li className="header-menu-item">
            <Link
              to="/"
              className={
                location.pathname === "/"
                  ? clsx(styles["header-menu-link"], styles["is-active"])
                  : styles["header-menu-link"]
              }
            >
              Все котики
            </Link>
          </li>
          <li className="header-menu-item">
            <Link
              to="/favorite"
              className={
                location.pathname === "/favorite"
                  ? clsx(styles["header-menu-link"], styles["is-active"])
                  : styles["header-menu-link"]
              }
            >
              Любимые котики
            </Link>
          </li>
        </nav>
      </div>
    </header>
  );
};

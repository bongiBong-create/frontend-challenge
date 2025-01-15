import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useFetching } from "../../hooks/useFetching";
import { useFavorite } from "../../hooks/useFavorite";

import { Header } from "../header";

export const MainLayout = () => {
  const { catsFetching, isLoading, cats, error } = useFetching();
  const { favoriteCats, handleFavoriteToggle, isCatFavorite } = useFavorite();

  useEffect(() => {
    catsFetching(15);
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <Outlet
          context={{
            error,
            isLoading,
            favoriteCats,
            handleFavoriteToggle,
            cats,
            isCatFavorite,
            catsFetching,
          }}
        />
      </main>
    </>
  );
};

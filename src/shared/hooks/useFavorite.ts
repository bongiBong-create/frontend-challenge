import { useEffect, useState } from "react";
import { Cat } from "../../entities/cat/models";

export type Favorite = {
  favoriteCats: Cat[];
  handleFavoriteToggle: (cat: Cat) => void;
  isCatFavorite: (id: string) => boolean;
}

export const useFavorite = (): Favorite => {
  const [favoriteCats, setFavoriteCats] = useState<Cat[]>([]);

  const handleFavoriteToggle = (cat: Cat) => {
    setFavoriteCats((prevCats) => {
      const fav = prevCats.some((favCat: Cat) => favCat.id === cat.id);
      if (fav) {
        return prevCats.filter((favCat: Cat) => favCat.id !== cat.id);
      } else {
        return [...prevCats, cat];
      }
    });
  };

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteCats");
    if (storedFavorites) {
      setFavoriteCats(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favoriteCats", JSON.stringify(favoriteCats));
  }, [favoriteCats]);

  const isCatFavorite = (id: string) => {
    return favoriteCats.some((favCat) => favCat.id === id)
  }

  return { favoriteCats, handleFavoriteToggle, isCatFavorite }
}
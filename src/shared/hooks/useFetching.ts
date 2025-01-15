import { useState } from "react";
import { Cat } from "../../entities/cat/models";
import { getCats } from "../api/service";

export type Fetch = {
  catsFetching: (limit: number) => Promise<void>,
  isLoading: boolean,
  error: string,
  cats: Cat[],
}

export const useFetching = (): Fetch => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("")

  const catsFetching = async (limit: number): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await getCats(limit)

      setCats((prev) => [...prev, ...response])
    } catch (e) {
      setIsLoading(false);
      setError("Произошла ошибка при загрузке котиков");
    } finally {
      setIsLoading(false);
    }
  }

  return { catsFetching, isLoading, error, cats };
}
import axios from "axios";
import { Cat } from "../../../entities/cat/models";

const key = import.meta.env.VITE_API_KEY;

export const getCats = async (limit: number = 10): Promise<Cat[]> => {
  const response = await axios.get<Cat[]>("https://api.thecatapi.com/v1/images/search?", {
    params: {
      limit: limit,
      api_key: key,
    }
  })

  return response.data
}
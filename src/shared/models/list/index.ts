import { Cat } from "../../../entities/cat/models"

export type CatList = {
  cats: Cat[],
  isLoading?: boolean,
}
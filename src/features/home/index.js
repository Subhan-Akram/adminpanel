import { Home } from "./components";
import HomeReducer from "./slice";
import {
  addModelTag,
  removeModelTag,
  setSearchDone,
  setCollectionByName,
} from "./slice";
import { getAllModelTags, getAllModels, removeCompareModel } from "./services";
import { homePath } from "./constants";

export {
  //components
  Home,

  //slice
  HomeReducer,
  setSearchDone,
  addModelTag,
  removeModelTag,
  setCollectionByName,

  //services
  getAllModelTags,
  getAllModels,
  removeCompareModel,

  //utils
  //hooks
  //constants
  homePath,
};

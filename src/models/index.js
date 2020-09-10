import { combineReducers } from "redux";
import flowerData from "./flowerData";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import flowerDataDetail from "./flowerDataDetail";
import login from "./user/login";
import diary from "./diary/diary";
import comment from "./diary/comment";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login"],
};
const rootReducer = combineReducers({
  flowerData,
  flowerDataDetail,
  login,
  diary,
  comment,
});

export default persistReducer(persistConfig, rootReducer);

import { combineReducers } from "redux";
import flowerData from "./flowerData";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import flowerDataDetail from "./flowerDataDetail";
import login from "./user/login";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login"],
};
const rootReducer = combineReducers({
  flowerData,
  flowerDataDetail,
  login,
});

export default persistReducer(persistConfig, rootReducer);

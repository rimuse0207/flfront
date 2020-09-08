import { combineReducers } from "redux";
import flowerData from "./flowerData";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import flowerDataDetail from "./flowerDataDetail";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login"],
};
const rootReducer = combineReducers({
  flowerData,
  flowerDataDetail,
});

export default persistReducer(persistConfig, rootReducer);

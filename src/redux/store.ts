// import { configureStore } from "@reduxjs/toolkit";
import reducer from "./redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { createStore } from "redux";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

// const store = configureStore({ reducer: reducer });

// export default store;

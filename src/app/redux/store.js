const { configureStore } = require("@reduxjs/toolkit");
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import rootReducer from ".";



// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: rootReducer,
  middleware: (mid) =>
  mid({
      serializableCheck: false,
    }).concat(rootReducer.middleware),
});
// const persistor = persistStore(store);

export { store };
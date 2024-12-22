import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session'; 
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";

const persistConfig = {
    key: 'root',
    storage:storageSession,
  };

  const persistedReducer = persistReducer(persistConfig, userReducer);

 const appStore=configureStore({
    reducer:{
      user:persistedReducer,
      movies:movieReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
})

const persistor = persistStore(appStore);

export { appStore, persistor };

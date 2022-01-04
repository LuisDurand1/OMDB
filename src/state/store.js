import  {configureStore} from "@reduxjs/toolkit"
import userReducer from "./user"
import logger from "redux-logger"
import favoriteReducer from "./favorite"
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import usersReducer from "./users";

const store= configureStore(    {
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer:    {
    user:userReducer,
    users:usersReducer,
    favorite:favoriteReducer
    }
})


export default store
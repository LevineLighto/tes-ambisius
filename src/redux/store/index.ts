import { 
    combineReducers, 
    configureStore
} from "@reduxjs/toolkit";

import MenuReducer from "../reducers/menu";
import TableReducer from "../reducers/table";

import storage from "redux-persist/lib/storage";
import { 
    FLUSH, 
    PAUSE, 
    PERSIST, 
    PURGE, 
    REGISTER, 
    REHYDRATE, 
    persistReducer,
    persistStore
} from "redux-persist";

const reducer = combineReducers({
    Menu : MenuReducer,
    Table: TableReducer
});

const persistConfig = {
    key         : process.env.REDUX_KEY,
    storage     : storage,
    whitelist   : ['Menu', 'Table']
}

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer     : persistedReducer,
    middleware  : (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER
                ]
            }
        }),
});

export const persistor = persistStore(store);
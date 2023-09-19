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
import ToastReducer from "../reducers/toast";
import ModalReducer from "../reducers/modal";

const reducer = combineReducers({
    Menu : MenuReducer,
    Modal: ModalReducer,
    Table: TableReducer,
    Toast: ToastReducer
});

const persistConfig = {
    key         : process.env.NEXT_PUBLIC_REDUX_KEY,
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
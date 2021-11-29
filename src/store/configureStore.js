import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import reducer from "./reducer";
import api from "./middleware/api";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

export default function () {
    return configureStore({
        reducer: persistedReducer,
        middleware: [
            ...getDefaultMiddleware({
                serializableCheck: false
            }),
            api
        ]
    });
}


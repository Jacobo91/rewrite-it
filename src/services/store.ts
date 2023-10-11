import { configureStore } from "@reduxjs/toolkit";
import { rephraseApi } from "./rephrase";
import { appStateReducer } from "../slices/bodySlice";

export const store = configureStore({
    reducer: {
        [rephraseApi.reducerPath]: rephraseApi.reducer,
        'appstate': appStateReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rephraseApi.middleware)
});
import { configureStore } from "@reduxjs/toolkit";
import { rephraseApi } from "./rephrase";

export const store = configureStore({
    reducer: {
        [rephraseApi.reducerPath]: rephraseApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rephraseApi.middleware)
});
import { createSlice } from "@reduxjs/toolkit";
import { HistoryElem } from "../types";
import { store } from "../services/store";

type initialStateType = {
    body: {
        from: 'en',
        text: ''
    },
    history: HistoryElem[] | []
}

const initialState = {
    'body': {from: "en",
    text: ""},
    'history': [] 
};

const historyInLocalStorage = localStorage.getItem("history");
if (historyInLocalStorage) {
    initialState.history = JSON.parse(historyInLocalStorage);
}

const appStateSlice = createSlice({
    name: 'appstate',
    initialState: initialState as initialStateType,
    reducers: {
        updateLanguage: (state, action) => {
            const { payload } = action;
            state.body.from = payload
        },
        updateText: (state, action) => {
            const { payload } = action;
            state.body.text = payload;
        },
        addToHistory: (state, action) => {
            const { payload } = action;
            const updatedHistory = [...state.history, payload];
            localStorage.setItem('history', JSON.stringify(updatedHistory));
            state.history = updatedHistory
        },
        removeFromHistory: (state, action) => {
            const { payload } = action;
            const updatedHistory = state.history.filter((element) => element.id !== payload);
            localStorage.setItem('history', JSON.stringify(updatedHistory));
            state.history = updatedHistory
        }
    }
});




export const { updateLanguage, updateText, addToHistory, removeFromHistory } = appStateSlice.actions;
export const appStateReducer =  appStateSlice.reducer;

/*

 const historyInLocalStorage = localStorage.getItem('history');
            if (historyInLocalStorage) {
            state.history = JSON.parse(historyInLocalStorage)
            }

*/
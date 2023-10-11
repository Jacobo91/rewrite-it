import { Dispatch, SetStateAction } from 'react';

export type Languages = {
    [key: string]: string;
};

export interface HistoryElementProps {
    element: {id: '', text: ''};
    onDelete: (id: string) => void;
}

export interface Element {
    id: string;
    text: string
}

export interface Response {
    error: {
        status: string;
        originalStatus: number;
        data: string;
        error: string;
    }
}

export type RephraseResponse = {
    data?: any; 
    error?: any; 
};

export type HistoryElem = {
    id: '',
    text: ''
}

export type AppState = {
    rephrase: {
        queries: {},
        mutations: {},
        provided: {},
        subscriptions: {},
        config: {
        online: true,
        focused: false,
        middlewareRegistered: false,
        refetchOnFocus: false,
        refetchOnReconnect: false,
        refetchOnMountOrArgChange: false,
        keepUnusedDataFor: 60,
        reducerPath: 'rephrase'
        }
    },
    appstate: {
        body: {
        from: 'en',
        text: ''
        },
        history: HistoryElem[] | []
    }
};

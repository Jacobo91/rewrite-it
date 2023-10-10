import { Dispatch, SetStateAction } from 'react';

export type Languages = {
    [key: string]: string;
};

type Body = {
    [key: string]: string;
}

export interface HeroProps {
    setLanguage: (newLanguage: string) => void;
    history: Element[];
    setHistory: Dispatch<SetStateAction<Element[]>>;
}

export interface DemoProps {
    setText: (newtext: string) => void;
    body: Body;
    setHistory: Dispatch<SetStateAction<Element[]>>;
    history: Element[]
}

export interface HistoryElementProps {
    element: Element;
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

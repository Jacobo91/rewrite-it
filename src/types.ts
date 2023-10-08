import { Dispatch, SetStateAction } from 'react';

export type Languages = {
    [key: string]: string;
};

type Body = {
    [key: string]: string;
}

export interface HeroProps {
    setLanguage: (newLanguage: string) => void;
    history: string[]
}

export interface DemoProps {
    setText: (newtext: string) => void;
    body: Body;
    setHistory: Dispatch<SetStateAction<string[]>>;
    history: string[]
}

export interface HistoryElementProps {
    element: string;
    index: number
}


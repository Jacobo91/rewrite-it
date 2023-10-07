
export type Languages = {
    [key: string]: string;
};

type Body = {
    [key: string]: string;
}

export interface HeroProps {
    setLanguage: (newLanguage: string) => void;
}

export interface DemoProps {
    setText: (newtext: string) => void;
    body: Body;
}


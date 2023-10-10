import { Dispatch, SetStateAction } from 'react';

export const generateUniqueId = () => {
    const timestamp = Date.now().toString(36);
    const randomStr = Math.random().toString(36).substring(2, 8);
    return timestamp + randomStr;
}

export const handleCopy = (text: string, setCopied: Dispatch<SetStateAction<boolean>> ) => {
    const textCopy = text || '';
    navigator.clipboard.writeText(textCopy);
    setCopied(true)
    setTimeout(() => setCopied(false), 5000)
};
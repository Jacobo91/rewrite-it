import { useState } from 'react';
import { HistoryElementProps } from '../types'
import copy from '../assets/copy.svg';
import check from '../assets/check.svg';

const HistoryElement = ({ element, index } : HistoryElementProps) => {

    const [copied, setCopied] = useState<boolean>(false); 

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true)
    };    

    return (
        <div
            className="flex justify-between p-4 cursor-pointer"
            key={index}
            onClick={() => handleCopy(element)}
        >
            <p>{element.slice(0, 20) + "..."}</p>
            <img
                className="w-4"
                src={copied ? check : copy}
                alt={`${copied ? "check_icon" : "copy_icon"}`}
            />
        </div>
    )
}

export default HistoryElement;
import { useState } from 'react';
import { HistoryElementProps } from '../types'
import copy from '../assets/copy.svg';
import check from '../assets/check.svg';
import { handleCopy } from '../utils';

const HistoryElement = ({ element, onDelete } : HistoryElementProps) => {

    const [copied, setCopied] = useState<boolean>(false); 
    
    const handleDelete = (id: string) => {
        onDelete(id)
    }

    return (
        <div
            className="flex justify-between p-4 cursor-pointer"
        >
            <p>{element.text.slice(0, 20) + "..."}</p>

            <div className='flex align-center'>
                <button
                    onClick={()=> handleDelete(element.id)}
                >
                    <i className="fa-solid fa-trash text-sm"></i>
                </button>

                <button
                    onClick={() => handleCopy(element.text, setCopied)}
                    className='self-center'
                >
                    <img
                        className="w-4 ml-2"
                        src={copied ? check : copy}
                        alt={`${copied ? "check_icon" : "copy_icon"}`}
                    />
                </button>
            </div>
        </div>
    )
}

export default HistoryElement;
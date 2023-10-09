import { DemoProps } from "../types";
import { useCreateRephrasedTextMutation } from '../services/rephrase';
import { useEffect, useState } from "react";
import copy from '../assets/copy.svg';
import check from '../assets/check.svg';
import { generateUniqueId } from '../utils';
import { Response } from "../types";
import { RephraseResponse } from "../types";


const Demo = ({ setText, body, setHistory, history } : DemoProps) => {

  const [createRephrasedText] = useCreateRephrasedTextMutation();
  const [rephrasedText, setRephrasedText] = useState<Response | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText)
  };

  const handleSubmit =  async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setIsLoading(true)
    const response: RephraseResponse = await createRephrasedText(body);
    
    if (response.data) {
      setIsLoading(false);
      setRephrasedText(response.data);
      const updatedHistory = [...history, {id: generateUniqueId(), text: response.error.data}];
      setHistory(updatedHistory);
      localStorage.setItem('history', JSON.stringify(updatedHistory));
    } else {
      setError(true)
    }
  
  };

  const handleCopy = () => {
    const textCopy = rephrasedText?.error?.data || '';
    navigator.clipboard.writeText(textCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 5000)
  };

  useEffect(() =>  {
    const historyInLocalStorafe = localStorage.getItem('history');
    console.log(rephrasedText)
    if (historyInLocalStorafe) {
      setHistory(JSON.parse(historyInLocalStorafe))
    }
  }, []);

  return (
    <section className="w-full max-w-xl mx-auto py-20 px-4 sm:px-0">
      <h2 className="green_gradient text-2xl mb-2">
        Paste your text underneath:
      </h2>
      <form action="" className="flex gap-4" onSubmit={handleSubmit}>
        <textarea
          name="text"
          id="user_text"
          rows={8}
          placeholder="Paste your text here..."
          className="w-full placeholder:text-gray-700 p-2 boder
        outline-green-500 peer"
          required
          onChange={handleTextChange}
        ></textarea>
        <button
          type="submit"
          className="text-xl font-extrabold peer-focus:text-green-500"
        >
          ↵
        </button>
      </form>

      {rephrasedText && <button
          className="bg-green-400 block w-60 p-2 mx-auto mt-4 rounded-md"
          onClick={() => window.location.reload()}
        >
          Continue Rephrasing
        </button>}

      <div className="mt-8 p-4">
        {/* Display Results */}
        {error ? (
          <div className="flex flex-col justify-center align-center">
            <p>Oooops something unexpected happened, please refresh the page</p>
            <button
              className="refresh_btn"
              onClick={() => window.location.reload()}
            >
              Refresh
            </button>
          </div>
        ) : isLoading ? (
          <div className="flex justify-center">
            <div className="spinner"></div>
          </div>
        ) : (
          rephrasedText && (
            <>
              <div className="flex justify-between align-center">
                <h2 className="green_gradient text-2xl mb-2">Rephrased:</h2>
                <button onClick={handleCopy}>
                  <img
                    className="w-5 mr-4"
                    src={copied ? check : copy}
                    alt={`${copied ? "check_icon" : "copy_icon"}`}
                  />
                </button>
              </div>
              <p className="max-h-[50vh] overflow-y-scroll">{rephrasedText?.error?.data}</p>
            </>
          )
        )}
      </div>
    </section>
  );
}

export default Demo;
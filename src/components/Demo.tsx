import { DemoProps } from "../types";
import { useCreateRephrasedTextMutation } from '../services/rephrase';
import { useEffect, useState } from "react";
import copy from '../assets/copy.svg';
import check from '../assets/check.svg';

const Demo = ({ setText, body, setHistory, history } : DemoProps) => {

  const [createRephrasedText] = useCreateRephrasedTextMutation();
  const [rephrasedText, setRephrasedText] = useState<object | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  // const [history, setHistory] = useState<string[]>([]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText)
  };

  const handleSubmit =  async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setIsLoading(true)
    const response = await createRephrasedText(body);
    
    if (response) {
      setIsLoading(false);
      setRephrasedText(response);
      const updatedHistory = [...history, response.error.data];
      localStorage.setItem('history', JSON.stringify(updatedHistory));
    } else {
      setError(true)
    }
  
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(rephrasedText?.error?.data);
    setCopied(true)
  };

  useEffect(() =>  {
    const historyInLocalStorafe = localStorage.getItem('history');

    if (historyInLocalStorafe) {
      setHistory(JSON.parse(historyInLocalStorafe))
    }
  }, []);

  return (
    <section className="w-full max-w-xl mx-auto py-20">
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
              <p>{rephrasedText?.error?.data}</p>
            </>
          )
        )}
      </div>
    </section>
  );
}

export default Demo;
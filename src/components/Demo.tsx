import { DemoProps } from "../types";


const Demo = ({ setText, body } : DemoProps) => {

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText)
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(body)
  };

  return (
    <section className="w-full max-w-xl h-20 mx-auto mt-4 px-4">
      <form 
        action="" 
        className="flex gap-4"
        onSubmit={handleSubmit}
      >
        
        <textarea 
        name="text" 
        id="user_text"
        placeholder="Paste your text here..."
        className="w-full placeholder:text-gray-700 indent-1
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

      <div className="bg-white">
        {/* Display Results */}

      </div>
    </section>
  )
}

export default Demo
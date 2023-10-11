import { useState } from "react";
import logo from "../assets/pencil.svg";
import { languages } from "../languages";
import { AppState  } from "../types";
import HistoryElement from './HistoryElement';
import { useDispatch, useSelector } from "react-redux";
import { removeFromHistory, updateLanguage } from "../slices/bodySlice";

const Hero = () => {

const [isOpen, setIsOpen] = useState<boolean>(false);   
const dispatch = useDispatch();
const history = useSelector(((state: AppState) => state.appstate.history))

const handleLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(updateLanguage(e.target.value));
};

const deleteElement = (id: string) => {
    dispatch(removeFromHistory(id))
}

return (
    <header>
    <nav className="relative flex justify-between p-4">
        <div className="flex">
        <img src={logo} alt="pencil_logo" className="w-[1.5rem] mr-1" />
        <span className="green_gradient font-bold text-2xl">Rewrite-it</span>
        </div>

        <div className="flex">
        <select
            name="from"
            id="language"
            className="outline-green-500 bg-inherit text-center cursor-pointer"
            onChange={handleLanguage}
        >
            {(Object.keys(languages) as Array<keyof typeof languages>).map(
            (code) => (
                <option value={code} key={code}>
                {languages[code]}
                </option>
            )
            )}
        </select>
        </div>

        <aside
            className={`aside ${isOpen ? 'scale-x-1' : 'scale-x-0'}`}
        >
            <div className={`flex justify-between align-center p-4
                            ${isOpen ? "opacity_on" : "opacity_off"}`}>
                <h2>History</h2>
                <button 
                    className=""
                    onClick={() => setIsOpen(false)}
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>

            {/* History */}
            <section className={`${isOpen ? "opacity_on" : "opacity_off"}`}>
                {
                    history && (
                        history.map((element) => (
                            <HistoryElement element={element} onDelete={deleteElement} key={element.id}/>
                        ))
                    )
                }
            </section>

        </aside>
    </nav>

    <div
        className="relative py-40 green_gradient_bg w-full flex flex-col 
                    justify-center text-center"
    >   
        <button
            className="absolute top-0"
            onClick={() => setIsOpen(true)}
        >
            <i className="fa-solid fa-bars text-2xl p-2"></i>
        </button>

        <h1 className="head_text">
        Plagiarism-Proof
        <br />
        Your Prose
        </h1>
        <p className="mt-2 text-md">Elevate your text with AI text rewriting</p>
    </div>
    </header>
    );
};

export default Hero;

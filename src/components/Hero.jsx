import logo from '../assets/pencil.svg'
import { languages } from '../languages'

const Hero = ({ setLanguage }) => {

    const handleLanguage = (e) => {
        const newLanguage = e.target.value;
        setLanguage(newLanguage)
    };

    return (
        <header>
            <nav className='flex justify-between p-4'>
                <div className='flex'>
                <img src={logo} alt="pencil_logo" className='w-[1.5rem] mr-1'/>
                <span className="green_gradient font-bold text-2xl">
                        Rewrite-it
                    </span>
                </div>

                <div className='flex'>

                    <select 
                        name="from" 
                        id="language"
                        className='outline-green-500 bg-inherit text-center'
                        onChange={handleLanguage}
                    >
                        {
                            Object.keys(languages).map(code => (
                                <option value={code} key={code}>
                                    {languages[code]}
                                </option>
                            ))
                        }
                    </select>
                </div>

            </nav>

                <div
                    className="py-40 green_gradient_bg w-full flex flex-col justify-center text-center"
                >
                    <h1
                        className="text-4xl sm:text-5xl"
                    >
                        Plagiarism-Proof 
                        <br/>
                        Your Prose 
                    </h1>
                    <p className="mt-2 text-sm" >Elevate your text with AI text rewriting</p>
                </div>
        </header>
    )
}

export default Hero
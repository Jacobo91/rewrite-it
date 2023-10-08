import './App.css';
import Hero from './components/Hero';
import Demo from './components/Demo';
import { useEffect, useState } from 'react';


function App() {

  const [body, setBody] = useState({
    from: "en",
    text: ""
  })

  const [history, setHistory] = useState<string[]>([]);

  const updateLanguage = (newLanguage: string) => {
    setBody({
      ...body,
      from: newLanguage
    })
  };

  const updateText = (newtext: string) => {
    setBody({
      ...body,
      text: newtext
    })
  };

  return (
    <main>
      <Hero setLanguage={updateLanguage} history={history} />
      <Demo  setText={updateText} body={body} setHistory={setHistory} history={history}/>
    </main>
  )
}

export default App

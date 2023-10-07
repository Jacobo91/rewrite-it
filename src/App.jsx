import './App.css';
import Hero from './components/Hero';
import Demo from './components/Demo';
import { useState } from 'react';


function App() {

  const [body, setBody] = useState({
    from: "en",
    text: ""
  })

  const updateLanguage = (newLanguage) => {
    setBody({
      ...body,
      from: newLanguage
    })
  };

  const updateText = (newtext) => {
    setBody({
      ...body,
      text: newtext
    })
  };

  return (
    <main>
      <Hero setLanguage={updateLanguage}/>
      <Demo  setText={updateText} body={body}/>
    </main>
  )
}

export default App

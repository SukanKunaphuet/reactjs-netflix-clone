import { useState } from 'react'
import './App.css'

// components
import Header from './components/Header/Header'
import Enjoy from './components/Enjoy/Enjoy'
import Download from './components/Download/Download'
import Watch from './components/Watch/Watch'
import Kids from './components/Kids/Kids'
import Questions from './components/Questions/Questions'
import Footer from './components/Footer/Footer'

import data from './data'

function App() {
  const [questions, setQuestions] = useState(data)

  return (
    <div style={{background: '#000'}}>
      <Header/>
      <Enjoy/>
      <Download/>
      <Watch/>
      <Kids/>
      <div style={{padding: '0 1.5rem', background: '#000', color: '#fff', textAlign: 'center', borderBottom: '8px solid #222', paddingBottom: '72px'}}>
        <h2 style={{fontSize: '2rem', marginBottom: '2rem', marginTop: '2rem'}}>Frequently Asked Questions</h2>
        {questions.map((question) => {
          return <Questions key={question.id} {...question} />
        })}
        <p style={{margin: '0', lineHeight: '1.6875', fontSize: '1.125rem', fontWeight: '400'}}>Ready to watch? Enter your email to create or restart your membership.</p>
        <input style={{padding: '1.5rem 1rem 0.5rem', width: '500px'}} type='email' placeholder='Email Address' />
        <button style={{backgroundColor: 'rgb(229, 9, 20)', color: 'white', padding: '12px 24px', width: '200px', border: 'none', 
                          fontSize: '1.5rem', position: 'relative', top: '-4px', margin: '0px 0px 0px 8px'}} type='submit'>Get Started</button>
      </div>
      <Footer />
    </div>
  )

}

export default App

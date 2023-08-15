import React, {useState} from 'react'

import { QuestionsCon } from './Styled';

function Questions({title, info}) {

    const [showInfo, setShowInfo] = useState(false);

  return (
    <QuestionsCon>
        <div style={{display: 'flex', justifyContent: 'center', margin: ''}}>
            <div style={{background: 'rgb(45,45,45)', fontSize: 'inherit', width: '750px', display: 'flex', borderBottom: '1px solid #000', 
                            justifyContent: 'space-between', padding: '1.5rem'}}>
                <h3 style={{display: 'flex', alignItems: 'center'}}>{title}</h3>
                <button style={{border: 'none', background: 'transparent', fontSize: '1rem', color: '#fff'}} onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? 'x' : '+'}
                </button>
            </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          {showInfo && <p style={{background: 'rgb(45,45,45)', fontSize: '1.125rem', width: '750px', 
                                    margin: '0 0 0.5rem 0', padding: '1.5rem', textAlign: 'left'}}>{info}</p>}
        </div>
    </QuestionsCon>
  )
}

export default Questions
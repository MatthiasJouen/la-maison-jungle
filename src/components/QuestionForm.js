import { useState } from 'react'


function QuestionForm() {
    const [inputValue, setInputValue] = useState('Posez votre question ici')
    return (
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => checkValue(e.target.value)}
            />
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
        </div>
    )
}

//permet de checker la valeur de l'input 
function checkValue(value) {
    if (!value.includes('f')) {
        setInputValue(value)
    }
}
export default QuestionForm
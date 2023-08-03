"use client"

import { useState } from "react"
import { QuestionItem } from "./components/QuestionItem";
import { questions } from "./data/questions";
import { Results } from "./components/Results";

const Page = () => {
  const  [answers,setAnswers] = useState<number[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false)

  const loadNextQuestion = () => {
    if(questions[currentQuestion + 1]){

      if(currentQuestion == 2){
        alert("GAYZÂO!")
      }
      setCurrentQuestion(currentQuestion + 1)
    }else{
      setShowResult(true)
    }
  }
  
  const title = 'Quiz ';
  const handleAnswered = (answer:number) =>{
    setAnswers([...answers, answer]);
   
    loadNextQuestion()
    
  }
  const handleRestartButton = () =>{
    setAnswers([]);
      setCurrentQuestion(0);
      setShowResult(false)
  }

  return(
    <div className="w-full h-screen bg-black flex justify-center items-center">
      <div className="bg-white w-full max-w-xl rounded-md text-black shadow shadow-black">
        <div className="p-7 font-bold text-5xl shadow shadow-gray-300 text-center text-red-600" >{title}</div>

        <div className="p-5">
          {!showResult && 
          <QuestionItem
          question={questions[currentQuestion]}
          count={currentQuestion +1}
          onAnswer={handleAnswered}
          />
        }
        {showResult  &&
        <Results questions={questions} answers={answers}/>
        }
        </div>
        <div className="p-5 text-center border-t border-gray-300">
          {!showResult && 
          ` ${currentQuestion +1} de ${questions.length} pergunta${questions.length === 1 ? '' : 's'}`
          }
         {showResult && 
            <button onClick={handleRestartButton} className="px-3 py-2 rounded-md bg-blue-800 text-white">Reiniciar Quiz</button>
         }
        

        </div>
      </div>
    </div>
  )
}
export default Page;
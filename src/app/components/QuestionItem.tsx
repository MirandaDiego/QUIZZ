import { useState } from "react";
import { Question } from "../types/Question"

type Props = {
    question: Question;
    count:number;
    onAnswer: (answer:number) => void;
}
export const QuestionItem = ({question, count, onAnswer}: Props)=>{

    const[selectedAnswer, setselectedAnswer] = useState<number | null>(null);

    const checkQuestion =(key:number)=>{
        if(selectedAnswer === null){
            setselectedAnswer(key);
            setTimeout(() => {
                onAnswer(key);
                setselectedAnswer(null);
            }, 1000)          
        }
    }

    return(
        <div>
            <div className="text-3xl font-bold mb-5">{count}. {question.question}</div>
            <div>
                {question.options.map((item, key)=>(
                    <div 
                    key={key}
                    onClick={() => checkQuestion(key)}
                    className={`border px-3 py-2 rounded-md text-lg mb-4 bg-blue-200 border-blue-400
                    ${selectedAnswer !== null ? 'cursor-auto': 'cursor-pointer hover:opacity-60'}
                    ${selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer === key && 'bg-green-100 border-green-400'}
                    ${selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer === key && 'bg-red-100 border-red-400'}
                    `}
                   
                    >{item}

                    </div>
                ))}
            </div>
        </div>
    )
}
'use client'

import {useEffect, useState} from "react";
import QuestionCard from "@/components/questionCard";
import EndQuiz from "@/components/endQuiz";


export default function Quiz() {
    const [questionNumber, setQuestionNumber] = useState(0)
    const [statusShown, setStatusShown] = useState(false)
    const [numCorrect, setNumCorrect] = useState(0);
    const [quizData, setQuizData] = useState(null);
    const [currentQuestionCorrect, setCurrentQuestionCorrect] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch( '/api/questions');
            const data = await res.json();
            setQuizData(data.results);
        }
        fetchData();
    },[])

    const handleClick = (answer) => {
        setStatusShown(true);

        const correctAnswer = quizData[questionNumber].correct_answer;

        answer === correctAnswer ? setStatus('correct') : setStatus('wrong');
    }

    const setStatus = (status) => {
        if (status === "correct") {
            setNumCorrect(numCorrect + 1);
            setCurrentQuestionCorrect(true);
        } else {
            setCurrentQuestionCorrect(false);
        }

        setTimeout(() => switchQuestion(), 750);
    }

    const switchQuestion = () => {
        setStatusShown(false);
        if (questionNumber < 4) {
            setQuestionNumber(questionNumber + 1);
        } else {
            setQuestionNumber(false);
        }
    }

    if(quizData === null) return <div>Loading...</div>;

    if (questionNumber !== false) {
        const question = quizData[questionNumber];
        console.log(question);

        return (
            <div>
                <div className="flex justify-center mt-16">
                    <QuestionCard
                        data={question}
                        onClick={handleClick}
                    />
                </div>
                {statusShown && (
                        currentQuestionCorrect ? (
                            <div className="flex justify-center mt-16">
                                <div className="bg-green-500 text-white p-4 rounded-md">
                                    <p className="text-2xl font-bold">Correct!</p>
                                </div>
                            </div>
                        ) : (
                            <div className="flex justify-center mt-16">
                                <div className="bg-red-500 text-white p-4 rounded-md">
                                    <p className="text-2xl font-bold">Incorrect!</p>
                                </div>
                            </div>
                        )
                )}
            </div>
        )
    }

    return <EndQuiz numCorrect={numCorrect} />;
}

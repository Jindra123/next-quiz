'use client'

import {useEffect, useState} from "react";
import tenQuestion from "@/app/api/questions";
import QuestionCard from "@/components/questionCard";


export default function Quiz() {
    const [questionNumber, setQuestionNumber] = useState(0)
    const [statusShown, setStatusShown] = useState(false)
    const [numCorrect, setNumCorrect] = useState(0);
    const [quizData, setQuizData] = useState(tenQuestion())
    const [currentQuestionCorrect, setCurrentQuestionCorrect] = useState(false);

    const handleClick = (isCorrect) => {
        setStatusShown(true);
        setStatusFunction(isCorrect)
    };

    const setStatusFunction = (status) => {
        if (status) {
            setNumCorrect((prevNumCorrect) => prevNumCorrect + 1);
            setCurrentQuestionCorrect(true);
        } else {
            setCurrentQuestionCorrect(false);
        }

        setTimeout(() => switchQuestion(), 750);
    };

    const switchQuestion = () => {
        setQuestionNumber((prevQuestionNumber) =>
            prevQuestionNumber < 4 ? prevQuestionNumber + 1 : false
        );
        setStatusShown(false);
    };

    if (questionNumber !== false) {
        const question = quizData[questionNumber];

        return (
            <div>
                <h1 className="text-3xl font-sans mt-32 md:mt-48 lg:mt-64 font-bold text-gray-800 dark:text-gray-300 text-center">{question.question}</h1>
                <h3 className="text-3xl font-sans mt-32 md:mt-48 lg:mt-64 font-bold text-gray-800 dark:text-gray-300 text-center">{question.category}</h3>
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

    return <div>End quiz</div>;
}

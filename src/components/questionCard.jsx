'use client'
function Answer(props) {
    return (
        <div
            className="bg-gray-100 dark:bg-gray-900 h-16 w-auto mb-4 rounded-md flex items-center w-full"
            onClick={() => props.onClick(props.answer)}
        >
            <input
                type="radio"
                name="answer"
                value={props.answer}
                className="ml-5 dark:bg-gray-800"
            />
            <label className="text-gray-700 dark:text-gray-400 text-lg ml-4">
                {props.answer}
            </label>
        </div>
    );
}

function QuestionCard(props) {
    const correctAnswer = props.data.correct_answer;
    const incorrectAnswers = [...props.data.incorrect_answers];
    const randomIndex = Math.floor(Math.random() * incorrectAnswers.length);
    incorrectAnswers.splice(randomIndex, 0, correctAnswer);

    return (
        <div className="bg-white dark:bg-[#495361] shadow-lg dark:shadow-none rounded-2xl m-10 p-6 hover:shadow-xl dark:hover:shadow-dark grid place-items-center">
            <h2 className="text-gray-800 dark:text-gray-300 font-sans font-medium text-l text-center">{props.data.category}</h2>
            <h1 className="text-gray-00 dark:text-gray-300 font-sans font-medium text-xl mt-6 text-center">{props.data.question}</h1>
            <div className="pt-6 pb-2 w-full">
                {incorrectAnswers.map((answer, id) => (
                    <Answer
                        key={id}
                        answer={answer}
                        onClick={props.onClick}
                    />
                ))}
            </div>
        </div>
    );
}

export default QuestionCard;

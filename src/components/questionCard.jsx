function Answer(props) {
    return (
        <div
            className="bg-gray-100 dark:bg-gray-900 mx-6 h-16 w-auto mb-4 rounded-md flex items-center"
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
    const combinedAnswers = [...props.data.incorrect_answers];
    console.log(combinedAnswers)
    return (
        <div className="bg-white dark:bg-[#495361] shadow-lg dark:shadow-none rounded-2xl m-10 p-6 hover:shadow-xl dark:hover:shadow-dark grid place-items-center">
            <h2 className="text-gray-800 dark:text-gray-300 font-sans font-medium text-l text-center">{props.data.category}</h2>
            <h1 className="text-gray-00 dark:text-gray-300 font-sans font-medium text-xl mt-6 text-center">{props.data.question}</h1>
            <div className="pt-6 pb-2">
                {props.data.incorrect_answers.splice((props.data.incorrect_answers.length+1) * Math.random() | 0, 0, props.data.correct_answer).map(answer => (
                    <Answer
                        key={answer}
                        answer={answer}
                        onClick={props.onClick}
                    />
                ))}
            </div>
        </div>
    );
}

export default QuestionCard;

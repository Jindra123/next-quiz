import Link from "next/link";

function EndQuiz(props) {
    const percentCorrect = (100 * props.numCorrect) / 5;

    let header;
    if (percentCorrect >= 60) {
        header = (
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-300 text-center">
                Well done! You got{" "}
                <span className="text-green-500">{percentCorrect}%!</span>
            </h1>
        );
    } else {
        header = (
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-300 text-center">
                You got <span className="text-red-500">{percentCorrect}%.</span>{" "}
                Better luck next time!
            </h1>
        );
    }

    return (
        <div className="grid">
            {header}
            <button onClick={() => window.location.reload(true)} className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 text-center rounded-full mt-10">
                Play Again
            </button>
            <Link href="/" className="bg-white hover:bg-gray-300 text-gray-900 font-bold py-2 text-center rounded-full mt-4">
                Go Home
            </Link>
        </div>
    );
}

export default EndQuiz;

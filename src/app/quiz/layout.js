export default function QuizLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r font-dosis">
            <h1 className="text-6xl font-bold text-white">Answer your question!</h1>
            {children}
            <p className="text-2xl font-semibold text-white ">A quiz app built with Next.js</p>
        </div>
    )
}

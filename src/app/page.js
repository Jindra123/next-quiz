'use client'

import Play from "@/components/play";
import Exam from "../../public/exam.svg";
import Link from "next/link";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r font-dosis">
        <Link
            href={{
                pathname: "quiz"
            }}
        >
            <Play imgSrc={Exam} imgAlt="Image" />
        </Link>
    </main>
  )
}

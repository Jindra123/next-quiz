'use client'

import Play from "@/components/play";
import Exam from "../../public/exam.svg";
import Link from "next/link";

export default function Home() {

  return (
    <main>
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

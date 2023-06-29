import Image from "next/image";

export default function Play(props) {

    return (
        <div
            className="bg-white dark:bg-[#495361] shadow-lg dark:shadow-none rounded-2xl h-80 w-72 m-10 hover:shadow-xl dark:hover:shadow-dark"
            //onClick={() => props.onClick(props.subject.toLowerCase())}
        >
            <div className="flex justify-center pt-12">
                <Image
                    src={props.imgSrc}
                    alt={props.imgAlt}
                    width="180"
                    height="180"
                />
            </div>
            <h2 className="text-gray-800 dark:text-gray-300 font-sans font-medium text-xl pt-8 text-center">
                Test your knowledge
            </h2>
        </div>
    )
}

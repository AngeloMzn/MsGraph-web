import Image from "next/image";

interface ImageArticleProps {
    children: React.ReactNode;
    src: string;
}

export default function ImageArticleRight({ children, src }: ImageArticleProps) {
    return (
        <section className="flex flex-col md:flex-row justify-center items-center pt-20 pb-4 pr-4">
            <div className="mt-4 md:mt-0 md:ml-10 md:pr-10 w-full md:w-auto pb-4 pr-4">
                <article className="w-full md:w-[666px] h-auto md:h-[255px] md:mr-4">
                    <p>{children}</p>
                </article>
            </div>
            <div className="relative w-full md:w-1/2 h-auto pb-4 pl-4">
                <Image
                    src={src}
                    alt="Descriptive text about the image"
                    layout="responsive"
                    width={457}
                    height={228}
                />
            </div>
        </section>
    );
}

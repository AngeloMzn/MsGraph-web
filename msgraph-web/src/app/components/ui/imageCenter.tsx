import Image from "next/image";

interface ImageCenterProps{
    src:string;
    alt:string | null | undefined
    width?:number;
    height?:number;
}
export default function ImageCenter({src, alt, width, height}:ImageCenterProps) {
    return(<>
        <section>
            <div className="flex px-10 py-10 justify-center items-center">
                <Image src={src} alt={alt ?? ''} width={width} height={height} />
            </div>
        </section>
    </>)
}
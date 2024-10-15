interface ImageCenterProps{
    src:string;
    alt:string | null | undefined
}
export default function ImageCenter({src, alt}:ImageCenterProps) {
    return(<>
        <section>
            <div className="flex px-10 py-10 justify-center items-center">
                <img src={src} alt={alt ?? ''} />
            </div>
        </section>
    </>)
}
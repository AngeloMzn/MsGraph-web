'use client'
import ExtendedArticle from "../ui/extendedArticle";
import ImageCenter from "../ui/imageCenter";

export default function SegundaSecao() {
    return (<>
        <div className="flex flex-col">
            <ImageCenter src="/images/graph2.jpg" alt="Imagem de teste" width={500} height={500} />
            <ExtendedArticle>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Fugit maiores error itaque, unde, nemo illum repudiandae in deleniti sunt id omnis vero amet debitis.
                Eos vitae et debitis natus doloremque.S
            </ExtendedArticle>
        </div>

    </>);
}
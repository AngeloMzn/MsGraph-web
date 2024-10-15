interface ExtendedArticleProps{
    children: React.ReactNode;
}

export default function ExtendedArticle({children}: ExtendedArticleProps) {
    return (<>
        <section>
           <div className="flex justify-center items-center my-20 mx-20">
             <article>   
                 <p>{children}</p>
             </article>
           </div>
        </section>
    </>)
}
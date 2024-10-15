import ExtendedArticle from "../components/extendedArticle";
import ImageCenter from "../components/imageCenter";
import Tittle from "../components/tittle";

export default function oboutUs() {
    return(<>
        <Tittle>Lorem Ipsum</Tittle>
        <ExtendedArticle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, ducimus, nesciunt aut quod cumque accusamus amet repudiandae numquam eum culpa voluptas omnis ipsam provident. Obcaecati quas repudiandae dolorum magnam nemo!</ExtendedArticle>
        <ImageCenter src={"/images/graph1.jpg"} alt={''}/>
        <ExtendedArticle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, ducimus, nesciunt aut quod cumque accusamus amet repudiandae numquam eum culpa voluptas omnis ipsam provident. Obcaecati quas repudiandae dolorum magnam nemo!</ExtendedArticle>
    </>);
}
'use client';
import "./globals.css";
import Tittle from "./components/tittle";
import ImageArticleLeft from "./components/imageArticleLeft";
import ImageArticleRight from "./components/imageArticleRight";


export default function Home() {
  return (
    <>
      <Tittle>Lorem Ipsum</Tittle>
      <ImageArticleLeft  src="/images/graph1.jpg">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates debitis qui blanditiis nesciunt magni unde natus eaque doloribus, alias soluta repellendus porro vel iure necessitatibus earum odit quasi. Repudiandae, eveniet!
      </ImageArticleLeft>
      <ImageArticleRight src="/images/graph2.jpg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fugit magnam odit libero nemo nisi inventore reiciendis atque velit nihil impedit architecto laborum beatae sit aspernatur, provident earum neque ullam.</ImageArticleRight>
    </>
  );
}


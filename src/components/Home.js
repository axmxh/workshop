import React from "react";
import Slider from "./Slider";
import News from "./News";
import Helped from "./Helped";

function Home({ news, setArticle }) {
  return (
    <>
      <Slider />
      <News news={news} />
      <Helped />
    </>
  );
}

export default Home;

import React from "react";
import Article from "./Article";
import InsideContainer from "./InsideContainer";

const MainContainer = () => {
  return (
    <div>
      <section className="mainContainer">
        <Article />
        <InsideContainer />
      </section>
    </div>
  );
};

export default MainContainer;

import React from "react";
import "./Home.css";

const styles = {
  color: "blue",
  backgroundColor: "green",
};

const Home = ({ name }) => {
  return (
    <div>
      {/* inline css */}
      <h1>Hi {name}</h1>
      <h1 style={{ color: "red", backgroundColor: "yellow" }}>Inline Style</h1>
      <h1 style={styles}>Internal Style</h1>
      <h1 className="my-tag">External Style</h1>
      <h1 id="my-elem">External Style</h1>
    </div>
  );
};

export default Home;

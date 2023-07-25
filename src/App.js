import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import CardComponent from "./components/CardComponent";

const FoodApp = () => {
  return (
    <>
      <Navbar />
      <Search />
      <div className="mainContent">
        <CardComponent />
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FoodApp />);

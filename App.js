import React from "react";
import ReactDOM from "react-dom/client";
{
  /* <div class="parent">
      <div class="child">
          <h1>I'm an H1 tag</h1>
          <h2>I'm an H2 tag</h2>
      </div>
  </div> */
}

const parent = React.createElement("div", { className: "parent" }, [
  React.createElement("div", { className: "child" }, [
    React.createElement("h1", {}, "I'm an H1 tag"),
    React.createElement("h2", {}, "I'm an H2 tag"),
  ]),
  React.createElement("div", { className: "child2" }, [
    React.createElement("h1", {}, "I'm an H1 tag"),
    React.createElement("h2", {}, "I'm an H2 tag"),
  ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(parent);

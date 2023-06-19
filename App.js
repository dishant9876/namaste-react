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
const Parent = () => (
  <div className="parent">
    <div className="child">
      <h1>I'm an H1 tag</h1>
      <h2>I'm an H2 tag</h2>
    </div>
    <div className="child2">
      <h1>I'm an H1 tag</h1>
      <h2>I'm an H2 tag</h2>
    </div>
  </div>
);
const ParentComponent = () => (
  <React.Fragment>
    <Parent />
    <div className="parent-component">
      <div className="child-component">
        <h1>I'm an H1 tag using component</h1>
        <h2>I'm an H2 tag using component</h2>
      </div>
      <div className="child2-component">
        <h1>I'm an H1 tag using component</h1>
        <h2>I'm an H2 tag using component</h2>
      </div>
    </div>
  </React.Fragment>
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(<ParentComponent />);

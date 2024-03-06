import React from "react";
import ReactDOM from "react-dom/client";

const title = (
  <h1 className="head" tabIndex="5">
    India is my country
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    {title}
    <h1 className="heading">India is a beautifull country.</h1>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
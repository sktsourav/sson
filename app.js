import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("div", {}, 
    [React.createElement("div", {}, [React.createElement("h1", {}, "Hello from JS Sibling 1"), React.createElement("h1", {}, "Hello from JS Sibling 2")]),
    React.createElement("div", {}, [React.createElement("h1", {}, "Hello from JS Sibling 3"), React.createElement("h1", {}, "Hello from JS Sibling 4")])]
    )
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)
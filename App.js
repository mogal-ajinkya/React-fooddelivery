import React from "react";
import ReactDOM from "react-dom/client";

/*
what parcel do ???????
* create server
* HMR - Hot module replacement
* file watcher algo - written in c++
*  bundling 
* minify
* cleaning our code ( remove console.log())
* super fast build algo
* image optimization
* dev and prodution build 
* cache while dev
* compression
* compatible with older version of browser
* give functionality to bulid in https npx parcel build index.html --https
* manage port number
* consistent hashing algo
* transitive dependencies -> 
*/
const tag = React.createElement("h1" ,
    null , "Namaste Everyone");
    const add = ReactDOM.createRoot(document.getElementById("root"));
    add.render(tag);


    // created h1 with text in it
    const heading = React.createElement("h1",
    {
        id:"heading",
    } , 
    "heading 1 from parcel");

    // create h2 with text in it
    const heading2 = React.createElement("h1",
    {
        id:"heading2",
    } , 
    "heading 2");

    // create div with array of tags  in it
    const container = React.createElement("div" , 
    {
        id : "container",
    } , [heading , heading2]);

    
    add.render(container);
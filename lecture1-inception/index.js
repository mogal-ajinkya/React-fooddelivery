 

const tag = React.createElement("h1" ,
    null , "Namaste Everyone");
    const add = ReactDOM.createRoot(document.getElementById("root"));
    add.render(tag);


    // created h1 with text in it
    const heading = React.createElement("h1",
    {
        id:"heading",
    } , 
    "heading 1");

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
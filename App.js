import React from "react"; //getting from node modules
import ReactDOM from "react-dom/client";
const heading1=React.createElement("h1",{
                id:"title",
                hellow:"hello"
            }," Heading l for parcel") // second one is object, React element is an object at the end of the day: second parameter is equivalent to specifying div id="title", second one is like id="title"
            //console.log(heading) #React element is an object
            const heading2 = React.createElement("h2", {
                    id: "title",
            }, " Heading 2") 
            const container=React.createElement(
                "div",{
                    id:"container",
                }, [heading1,heading2]
            )
            const root=ReactDOM.createRoot(document.getElementById("root")) //getElementByID is used to get the div which has the ID root at line number 10
            root.render(container) // passing a react element inside the root
            //dist folder stores the minified files 
import React from "react"; //getting from node modules
import ReactDOM from "react-dom/client";
const heading1=React.createElement("h1",{
                id:"title",
                key:"h1",
                hellow:"hello"
            }," Heading l for parcel") // second one is object, React element is an object at the end of the day: second parameter is equivalent to specifying div id="title", second one is like id="title"
            //console.log(heading) #React element is an object
const heading2 = React.createElement("h2", {
        id: "title",
        key:"h2"
}, " Heading 2") 
const container=React.createElement( //any tag of HTML is called an element in React
    "div",{
        id:"container",
    }, [heading1,heading2]
)
const heading=(
    <h1> Namaste React </h1>
)
const Title=()=>( //omitting the return statement here, this is also valid syntax
    <h1 id="title" key="h9"> Cool stuff here </h1>
);
const heading3=(
    <div>
    <h1 id="heading3" key="abc"> Namaste React </h1> /*This is known as JSX expression */
    <h2> This is a h2 tag </h2>
    </div>
)
const HeaderComponent=()=>{
    // we can add React element like this in React component like {heading}
    //Title() works because it is just calling the function
    return (
    <div>
    <Title/>
    {1+2}
    <h2> 
    Introduction to functional component
    </h2>
    <h2> This is a h2 tag </h2>
    </div>
    );
}
const root=ReactDOM.createRoot(document.getElementById("root")) //getElementByID is used to get the div which has the ID root at line number 10
root.render(<HeaderComponent/>) // passing a react element inside the root
//dist folder stores the minified files 

//React Component


const HeaderComponent2=()=>(
    <div>
    <h1> Namaste React functional component 
    </h1> 
    </div>); //this is alternative syntax without using return statement
/* <div class="header">
            <h1> Namaste React </h1>
            <ul> 
                <l1> About Us </l1>
                <li> Support </li>
                <li> Home </li>
            </ul>
        </div> --> <!-- I want to create this type of structure with React if I do this using React.createElement the code would be very lengthy and confusing*/
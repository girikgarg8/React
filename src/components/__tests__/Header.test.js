import Header from "../Header"
import {render} from "@testing-library/react";
test("Logo should load on rendering header",()=>{
    //Load header
    const header=render(<Header/>);
    console.log(header);
    //Check if logo is loaded
});
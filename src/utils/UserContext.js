import { createContext } from "react";

const userContext=createContext({
    person:{name: "Girik Garg",
    email: "girikgarg8@gmail.com"
    }
})

userContext.displayName="UserContext" //this name will now be displayed in the react developer tools componenets section, so it makes it easier to debug things
export default userContext;
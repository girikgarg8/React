import { createContext } from "react";

const userContext=createContext({
    user:{name: "Girik Garg",
    email: "girikgarg8@gmail.com"
    }
})

export default userContext;
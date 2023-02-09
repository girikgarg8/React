import React from "react"
import userContext from "../utils/UserContext";
class Profile extends React.Component{
    constructor(props){
        super(props);
        console.log("Constructor called")
        //create state
        this.state={
            userInfo:{
                name: "Dummy Name",
                location: "Dummy Location "
            }
        };
    }
    componentWillUnmount(){
        clearInterval(this.timer)
        console.log("Component unmounted")
    }
    componentDidMount(){
        this.timer=setInterval(()=>{
            console.log("Namaste React OP")
        },1000)
        // const data = await fetch("https://api.github.com/users/girikgarg8")
        // const json=await data.json()
        // this.setState({
        //     userInfo:json
        // })
        console.log("componentDidMount")
    }
    render(){
        console.log("render")
        return (<div>
            {/* <img src={this.state.userInfo.avatar_url} />
            <h1> Name: {this.state.userInfo.name} </h1> 
            <h2> Location: {this.state.userInfo.location } </h2> */}
            Welcome to About Page as a class component
            <userContext.Consumer>
                {({person})=><h4 className="font-bold text-xl p-10"> {person.name}- {person.email} </h4>}
            </userContext.Consumer>
        </div>
        )
    }
}
export default Profile;
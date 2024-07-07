import { Component } from "react";
import UserContext from "../utils/UserContext";
class AboutUs extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <div>
                <p>Helloooo There !!!! - 
                <UserContext.Consumer>
                    {(data) => <span className="font-bold"> {data?.loggedInUser}</span>}
                </UserContext.Consumer>
                </p>
                
                <h2> We are foodie organization and thas all you need to know about us.</h2>
            </div>
        )
    }
}

export default AboutUs
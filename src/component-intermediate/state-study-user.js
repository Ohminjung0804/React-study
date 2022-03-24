import React ,{useState}from "react";
import ReactDOM  from "react-dom";

const UserProfile = function(props){
    const [userName, setUserName] = useState("냥냥")
    const[userAge, setUserAge] = useState("22")
    const[EmailAddress, setEmilAddress] = useState("rffsf@gmail.com")

    return(
        <div>
            <h1>{userName}</h1>
            <h1>{userAge}</h1>
            <h1>{EmailAddress}</h1>
        </div>
    )
}

ReactDOM.render(
    <UserProfile/>,
    document.getElementById('root')
)
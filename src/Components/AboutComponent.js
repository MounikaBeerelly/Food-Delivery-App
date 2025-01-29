import React from 'react';
import UserClassComponent from "./UserClassComponent";
import UserComponent from "./UserComponent";
import UserContext from '../utils/userContext';

class AboutComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        
        console.log("Parent Constructor");
    }

    componentDidMount() {
        console.log("PArent component did mount")
    }

  render() {
    console.log("Parent Render");
    return (
        <div>
            <h2>About Class Component</h2>
            <div>
                LoggedIn User:
                <UserContext.Consumer>
                    {({loggedInUser}) => {
                        <h1 className='font-bold text-lg'>{loggedInUser}</h1>
                    }}
                </UserContext.Consumer>
            </div>
            <UserClassComponent 
                name={"Mounika (class)"} 
                location={"Hyderabad (class)"}
            />
            <UserComponent 
                name={"Mounika (functional)"}
            />
        </div>
    )
}
}

const AboutFunctionalComponent = () => {
    return (
        <div>
            <h2>About</h2>
            <h3>This is a React Application</h3>
            <UserClassComponent 
                name={"Mounika (class)"} 
                location={"Hyderabad (class)"}
            />
            <UserComponent 
                name={"Mounika (functional)"}
                />
        </div>
    )
}

export default AboutComponent;
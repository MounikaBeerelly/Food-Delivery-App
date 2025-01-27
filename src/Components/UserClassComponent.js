import React from 'react';

class UserClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0,
            userInfo: {
                name: "dummy",
                location: "default",
            },
        }

        // console.log(this.props.name + "Child Constructor Rendered");
    }

   async componentDidMount() {
        // console.log(this.props.name + "Child Component Did Mount");
        // Api call
        const data = await fetch("https://api.github.com/users/mounikabeerelly");
        const json = await data.json();

        this.setState({
            userInfo : json,
        });

        // console.log(json);
    }

    componentDidUpdate(){
        // componentDidUpdate renders every update
        console.log("Component did update");
    }

    componentWillUnmount(){
        console.log("Component Will Unmount");
    }

    render() {
        // console.log(this.props.name + "Child Rendered");

        const {login, location, html_url} = this.state.userInfo;
        const { count } = this.state;

        return (
            <div className="user-card">
            <h1>Count: {count}</h1>
            <button onClick={
                () => { 
                    this.setState({
                       count: this.state.count + 1,
                    })
                }
            }>Increment Count</button>
            <h2>Name: {login}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: {html_url}</h4>
        </div>
        );
    }
}

export default UserClassComponent;

/****
 *
 * --- MOUNTING ----
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy >
 * Component Did MOunt
 *      <API Call>
 *      <this.setState> -> State variable is updated
 *
 * ---- UPDATE
 *
 *      render(APi data)
 *      <HTML (new API data>)
 *      ccomponentDid Update
 *
 *
 *
 *
 */
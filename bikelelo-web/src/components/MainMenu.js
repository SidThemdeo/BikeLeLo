import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Login from "./Login";
import mystore from "./store";
import UserHome from "./UserHome";

export default class MainMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false
        } 
    }

    render() {
        mystore.subscribe(()=>{this.setState({flag: mystore.getState().loggedin})})
        return (
            <BrowserRouter>
                <div style={{display: this.state.flag?'none':'block'}}>
                    <nav>
                        <Link to="/login">Login</Link>
                        <span style={{margin: '10px'}}></span> 
                    </nav>
                    <div>
                        <Route path="/login" component={Login} />
                    </div>
                </div>
                <Route path="/userhome" component={UserHome} />
            </BrowserRouter>
        )
    }
}
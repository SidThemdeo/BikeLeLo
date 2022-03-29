import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import mystore from './store';
import UserHome from './UserHome';

function Login() {

    let navigate = useNavigate();
    const[usrid, setUsrid] = useState("");
    const[pwd, setPwd] = useState("");

   /*handleInput = (element)=> {      
        console.log(this.state.usrid);
        console.log(this.state.pwd);
    } */

    const submitForm=(ev)=>{
        ev.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers :{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                userid: usrid,
                pwd: pwd,
            })
        }
        fetch("http://localhost:8081/login",reqOptions)
        .then(resp=> resp.json())
        .then(obj=> { console.log(obj);
            //setUser(obj);
            //console.log(user);
            localStorage.setItem("loggedinuser" , JSON.stringify(obj));
            //console.log(localStorage.getItem("loggedinuser").loginid.role);
            //console.log(user.fname);
            mystore.dispatch({type: 'LOGGEDIN'});
            console.log(mystore.getState().loggedin);
            console.log(localStorage.getItem("loggedinuser"));
            let role = (JSON.parse(localStorage.getItem("loggedinuser"))).loginid.role;
            console.log(role);
            navigate("/UserHome");
    });
}

    return (
        <div className="container">
                <form>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>User ID</label>
                    <input type="text" name="usrid" className="form-control" placeholder="Enter User ID" onChange={(ev)=>setUsrid(ev.target.value) } />
                </div><br/>
                <div className="form-group">
                    <label>Password</label>
                    <input type="text" name="pwd" className="form-control" placeholder="Enter password" onChange={(ev)=>setPwd(ev.target.value) }/>
                </div><br/>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block" onClick={(ev)=>submitForm(ev)}>Submit</button>
                </div>
                <br/><br/>
            </form>
            
            </div>
    );
}

export default Login;
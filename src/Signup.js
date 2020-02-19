import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {RigisterAction} from './redux/SigninAction';
import {connect} from 'react-redux';

class Signup extends Component {
    handleSubmit=(e)=>{
        let check=false;
        e.preventDefault();
        this.props.username.map(x=>{
            if(x==e.target[0].value.charAt(0).toUpperCase()+e.target[0].value.slice(1)){
                check=true;

            }
        })
        if(check){
            alert("username already exits");
        }
        else if(e.target[1].value===e.target[2].value){
           this.props.RigisterAction(e.target[0].value.charAt(0).toUpperCase()+e.target[0].value.slice(1),parseInt(e.target[1].value))
           this.props.history.push("/signin");
        }
        else{
            alert("Password not match")
        }

    }
   
    render() {
        
        return (
            <div className="signin-form">
                <form onSubmit={this.handleSubmit}>
                    <h2>Sign Up</h2>
                    <p className="hint-text">Sign Up with your social media account</p>
                    <div className="social-btn text-center">
                        <a href="#" className="btn btn-primary btn-lg" title="Facebook"><i className="fa fa-facebook"></i></a>
                        <a href="#" className="btn btn-info btn-lg" title="Twitter"><i className="fa fa-twitter"></i></a>
                        <a href="#" className="btn btn-danger btn-lg" title="Google"><i className="fa fa-google"></i></a>
                    </div>
                    <div className="or-seperator"><b>or</b></div>
                    <div className="form-group">
        	<input type="text" className="form-control input-lg" name="username" placeholder="Username" required="required" />
        </div>
		<div className="form-group">
            <input type="password" className="form-control input-lg" name="password" placeholder="Password" required="required" />
        </div>
		<div className="form-group">
            <input type="password" className="form-control input-lg" name="confirm_password" placeholder="Confirm Password" required="required" />
        </div>  
        <div className="form-group">
            <button type="submit" className="btn btn-success btn-lg btn-block signup-btn">Sign Up</button>
        </div>
                </form>
                <div className="text-center">Already have an account?<Link to="/signin">Sign in</Link></div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        username: state.username
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        RigisterAction: (User,Password) => {
            dispatch(RigisterAction(User,Password))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Signup);

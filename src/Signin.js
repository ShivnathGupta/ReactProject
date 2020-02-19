import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signin.css'
import { Link } from 'react-router-dom';
import { SigninAction } from './redux/SigninAction'
import { connect } from 'react-redux'

class Login extends Component {
    handleFormSubmit = (e) => {
     let valid=false;
        e.preventDefault();
        for (let i = 0; i < this.props.username.length; i++) {
            if ((e.target[0].value === this.props.username[i]) && (e.target[1].value === this.props.password[i])) {
                valid=true;
                break;
            
            }
            
        }
        if(valid)
        {
            this.props.signin(e.target[0].value);
                this.props.history.push("/");
            
        }
        else{
            alert("wrong useername and password")
        }

       
    }
    render() {
        return (

            <div className="signin-form">

                <form onSubmit={this.handleFormSubmit}>
                    <h2>Sign in</h2>

                    <p className="hint-text">Sign in with your social media account</p>
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
                        <input type="Submit" className="btn btn-success btn-lg btn-block signup-btn" defaultValue="Sign in" />
                    </div>
                    <div className="text-center small"><Link to="/forget">Forgot Your password?</Link></div>
                </form>

                <div className="text-center">Don't have an account? <Link to="/signup">Sign up</Link></div>

            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        username: state.username,
        password: state.password,
        isLogging: state.isActive
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signin: (x) => dispatch(SigninAction(x))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)

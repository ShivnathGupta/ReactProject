import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {SignoutAction} from './redux/SigninAction'
import {withRouter} from 'react-router-dom'

class UnAuth extends Component {
    Signout=()=>{
       this.props.signout();
        this.props.history.push("/signin");
       
    }
    render() {
        console.log(this.props.CurrentUserName)
        if(this.props.isLogging==true){

            return <div><h1 className="btn btn-outline-primary ml-3" onClick={this.Signout}>{this.props.CurrentUserName}</h1>
            
            </div>
        }
        else{
            return (<div>
             
                <button className="btn btn-outline-primary ml-3" type="submit"><Link to="/signin" >Login</Link></button>
                
                </div>
            )

        }
        
    }
}
const mapStateToProps=(state)=>{
    return{
       CurrentUserName:state.current,
        isLogging:state.isActive
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        signout:()=>dispatch(SignoutAction())
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(UnAuth))

import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Techhelp from './techhelp.png'
import Headerli from './Headerli'; 
import { Link} from 'react-router-dom'
import UnAuth from './unAuthenticate';

export default class Header extends Component {
  render() {

    return (
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark list">
        
        <Link className="navbar-brand" to="/"><img src={Techhelp} alt="logo" height="40px" width="60px"/></Link>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <Headerli menuLink="/latest" menuName="Home" />
            <Headerli menuLink="/popular" menuName="Popular Movie" />
            <Headerli menuLink="/hindi" menuName="Latest Movie" />
            <Headerli menuLink="/english" menuName="Hindi Movie" />
            <Headerli menuLink="/latest" menuName="Punjabi Movie" />
            <Headerli menuLink="/hindi" menuName="Tamil Movie" />
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="button">Searchs</button>
          </form>
          
        <UnAuth />
       
        </div>

      </nav>
    )
  }
}

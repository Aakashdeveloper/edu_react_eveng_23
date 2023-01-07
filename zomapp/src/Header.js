import React,{Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

class Header extends Component {
    render(){
        return(
            <header>
                <div id="icon">
                    <Link to="/"><h1>Xomato</h1></Link>
                    
                    
                </div>
                <div id="loginset">
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </header>
        )
    }
}

export default Header
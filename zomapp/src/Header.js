import React,{Component} from 'react';
import './Header.css';

class Header extends Component {
    render(){
        return(
            <header>
                <div id="icon">
                    <h1>Xomato</h1>
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
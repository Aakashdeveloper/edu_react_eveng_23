import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Register from './component/Register';
import Login from './component/login';
import Profile from './component/profile';
import Users from './component/userList';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/users" component={Users}/> 
            <Route path="/profile" component={Profile}/>
           
            <Footer/>
        </BrowserRouter>
    )
}


export default Routing
import React,{Component} from 'react';
import {Link} from 'react-router-dom';

const url = "http://3.17.216.66:5000/api/auth/userinfo";

class Profile extends Component {
    constructor(){
        super()

        this.state={
           user:''
        }
    }

    handleLogout= () => {
        sessionStorage.removeItem('rtk')
        sessionStorage.removeItem('ltk')
        this.setState({user:''});
        this.props.history.push('/')
    }

    conditionalRender = () => {
        if(this.state.user.role && this.state.user.role === "Admin"){
            return(
                <Link to="/users" className="btn btn-info">
                    Users
                </Link>
            )
        }
    }

    render(){
        if(sessionStorage.getItem('ltk') === null){
            this.props.history.push('/')
        }
        sessionStorage.setItem('rtk',this.state.user.role)
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>Profile</h3>
                    </div>
                    <div className="panel-body">
                        <h1>Hi {this.state.user.name}</h1>
                        <h2>Your Email Id is {this.state.user.email}</h2>
                        <h2>Your Phone Number is {this.state.user.phone}</h2>
                        <h2>Your Role is {this.state.user.role}</h2>
                        {this.conditionalRender()} &nbsp;
                        <button className="btn btn-danger"
                        onClick={this.handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
        )
    }


    // 
    componentDidMount(){
        fetch(url,{
            method: 'GET',
            headers: {
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                user:data
            })
        })
    }

}

export default Profile;
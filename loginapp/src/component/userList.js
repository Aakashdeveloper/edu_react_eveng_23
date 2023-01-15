import React,{Component} from 'react';
import axios from 'axios';
import DisplayUsers from './userDisplay'

const users = "http://3.17.216.66:5000/api/auth/users"

class UserList extends Component{
    constructor(props){
        super(props)

        this.state={
            users:''
        }
    }

    render(){
        if(sessionStorage.getItem('ltk') === null){
            this.props.history.push('/')
        }
        if(sessionStorage.getItem('ltk') !== null && sessionStorage.getItem('rtk') !=='Admin'){
            this.props.history.push('/profile?message=You are not allowed')
        }
        return(
            <>
                <DisplayUsers userData={this.state.users}/>
            </>
        )
    }

    componentDidMount(){
        axios.get(users).then((res) => {this.setState({users:res.data})})
    }
}

export default UserList;
import React,{Component} from 'react';
import Header from '../../header';

const url = "https://developerjwt.herokuapp.com/api/auth/register";

class Register extends Component {
    constructor(props){
        super(props)

        this.state={
            name:'',
            email:'',
            password:'',
            phone:''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = () => {
        console.log(this.state)
        fetch(url,{
            method:'POST',
            headers: {
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push(`/`))
    }

    render(){
        return(
            <>
            <Header/>
            <div className="container">
                <br/>
                <div className="panel panel-info">
                    <div className="panel-heading">
                        Register
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label>Name</label>
                            <input className="form-control" name="name"
                            value={this.state.name} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control" name="email"
                            value={this.state.email} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input className="form-control" name="password"
                            value={this.state.password} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input className="form-control" name="phone"
                            value={this.state.phone} onChange={this.handleChange}/>
                        </div>
                        
                        <button className="btn btn-info" onClick={this.handleSubmit}>
                            Register
                        </button>
                    </div>
                </div>
            </div>   
            </>                                               
        )
    }
}

export default Register
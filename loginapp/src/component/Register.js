import React,{Component} from 'react';

const url = "http://3.17.216.66:5000/api/auth/register";

class Register extends Component {

    constructor(props){
        super(props)

        this.state={
            name:'Amit',
            email:"amit@gmail.com",
            phone:98987869,
            password:'12345678'
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleCheckout = () => {
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/'))
    }


    render(){
        return(
            <div className="container">
                <hr/>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>Register </h3>
                    </div>
                    <div className="panel-body">
                        <div className='form-group col-md-6'>
                            <label>Name</label>
                            <input className='form-control' name="name"
                            value={this.state.name} onChange={this.handleChange}/>
                        </div>
                        <div className='form-group col-md-6'>
                            <label>Email</label>
                            <input className='form-control' name="email"
                            value={this.state.email} onChange={this.handleChange}/>
                        </div>
                        <div className='form-group col-md-6'>
                            <label>Password</label>
                            <input className='form-control' name="password"
                            value={this.state.password} onChange={this.handleChange}/>
                        </div>
                        <div className='form-group col-md-6'>
                            <label>Phone</label>
                            <input className='form-control' name="phone"
                            value={this.state.phone} onChange={this.handleChange}/>
                        </div>
                        <button className='btn btn-danger' onClick={this.handleCheckout}>
                            Register
                        </button>
                    </div>
                    
                </div>
            </div>
        )
    }
 
}

export default Register;
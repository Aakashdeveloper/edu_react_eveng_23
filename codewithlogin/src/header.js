import React,{Component} from 'react';
import './Header.css';
import {Link,withRouter} from 'react-router-dom'

const url = "https://developerjwt.herokuapp.com/api/auth/userinfo"
class Header extends Component {
    constructor(props){
        super(props)

        this.state = {
            userdata:'',
            username:'',
            imgUrl:''
        }
    }

    handleLogout = () => {
        this.setState({userdata:''})
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('userdata')
        localStorage.removeItem('username')
        this.props.history.push('/')
    }

    conditionalRender = () => {
        if(this.state.userdata.name || localStorage.getItem('username') !== null){
            if(localStorage.getItem('username') !== null && localStorage.getItem('username') == undefined){
                return(
                    <>
                        <button className="btn btn-info">
                                Hi
                                <img src={localStorage.getItem('imgUrl')} style={{height:50,width:50}}/>
                                {localStorage.getItem('username')}
                        </button> &nbsp;
                        <button className="btn btn-danger" 
                        onClick={this.handleLogout}>Logout</button>
                        
                    </>
                )
            }else{
                let data = this.state.userdata;
                let outputArray = [data.name,data.email,data.phone,data.role]
                sessionStorage.setItem('userdata',outputArray);
                return(
                    <>
                        <Link class="btn btn-primary"><span className="glyphicon glyphicon-user"></span> Hi {outputArray[0]}</Link>
                        &nbsp;
                        <button className="btn btn-danger" 
                        onClick={this.handleLogout}>Logout</button>
                        </>
                )
            }
        }else{
            return(
                <>
                    <a class="btn btn-info" href="https://github.com/login/oauth/authorize?client_id=930f92e500db2f4d357c">
                        Login With Github
                    </a> &nbsp;
                    <Link class="btn btn-primary" to="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</Link>
                    &nbsp;
                    <Link class="btn btn-success" to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link>
                </>
            )
        }
    }

    render(){
        return(
            <div className="header">
                <div id="brand">
                    Developer Funnel
                </div>
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div id="social">
                   {this.conditionalRender()}
                </div>
            </div>
        )
    }

    componentDidMount() {
        if(this.props.location.search){
            const code = (this.props.location.search).split('=')[1];
            if(code){
                let requestData = {
                    code:code
                }

                fetch(`http://localhost:9900/oauth`,{
                    method: 'POST',
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify(requestData)
                })
                .then((res) => res.json())
                .then((data) => {
                   let user = data.name;
                   let img = data.avatar_url;
                   localStorage.setItem('username',user);
                   localStorage.setItem('imgUrl',img);
                   this.setState({username:user, imgUrl:img})
                })
            }
        }
        fetch(url,{
            method: 'GET',
            headers: {
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({userdata:data})
        })
    }
    
}

export default withRouter(Header)


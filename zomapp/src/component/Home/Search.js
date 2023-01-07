import React,{Component} from 'react';
import './Search.css';

const lurl = "http://3.17.216.66:4000/location"
const rurl = "http://3.17.216.66:4000/restaurant?stateId="

class Search extends Component {

    constructor(){
        super()
        //console.log("inside constructor")
        this.state={
            location:'',
            rest:''
        }
    }

    renderCity =(data) => {
        if(data){
            return data.map((item) => {
                return (
                    <option value={item.state_id} key={item.state_id}>{item.state}</option>
                )
            })
        }
    }

    renderRest = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.restaurant_id}
                    key={item.restaurant_id}>
                        {item.restaurant_name} | {item.address}
                    </option>
                )
            })
        }
    }

    handleCity = (event) => {
        //console.log(event.target.value)
        let stateId = event.target.value
        fetch(`${rurl}${stateId}`,{method: 'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({rest:data})
        })
    }

    render(){
        //console.log("inside render")
        return(
            <div id="search">
                <div id="logo">
                    <span>D!</span>
                </div>
                <div id="heading">
                    Find Best Place Near You
                </div>
                <div className="dropdown">
                    <select onChange={this.handleCity}>
                        <option>----SELECT YOUR CITY----</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select id="restDrop">
                        <option>----SELECT YOUR RESTAURANTS----</option>
                        {this.renderRest(this.state.rest)}
                    </select>
                </div>
            </div>
        )
    }

    ///api calling on page load
    componentDidMount(){
        //console.log("inside componentDidMount")
        fetch(lurl,{method:'GET'})
        //return promise
        .then((res) =>  res.json())
        //return data
        .then((data) =>  {
           // console.log(data)
            this.setState({location:data})
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export default Search
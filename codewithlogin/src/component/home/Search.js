import React,{Component} from 'react';
import './Search.css';
import {withRouter} from 'react-router-dom';

const url = "https://zomatoajulypi.herokuapp.com/location";
const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId="

class Search extends Component{
    constructor(){
        super()

        this.state={
            location:'',
            restaurant:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return (
                    <option value={item.state_id} key={item.state_id}>{item.state}</option>
                )
            })
        }
    }

    renderHotel = (data) => {
        if(data){
            return data.map((item) => {
                return (
                    <option value={item.restaurant_id} key={item.restaurant_id}>
                        {item.restaurant_name} | {item.address}
                    </option>
                )
            })
        }
    }

    handleCity = (event) => {
        console.log(event.target.value)
        const cityId = event.target.value
        fetch(`${restUrl}${cityId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({restaurant:data})
        })
    }

    handleRest = (event) => {
        this.props.history.push(`/details/${event.target.value}`)
    }
    render(){
        console.log(">>>in search",this.props)
        return(
            <div className="search">
                <div id="logo">
                    <span>D!</span>
                </div>
                <div id="heading">
                    Search Place Near To You
                </div>
                <div id="dropdown">
                    <select onChange={this.handleCity}>
                        <option>----SELECT Location----</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select id="restaurant" onChange={this.handleRest}>
                        <option>----SELECT Restaurant----</option>
                        {this.renderHotel(this.state.restaurant)}
                    </select>
                </div>
            </div>
        )
    }

    //api calling 
    componentDidMount(){
        // we are getting data from api and setting in the state
        fetch(url,{method:'GET'})
        // return the promise
        .then((res) => res.json())
        // resolve the promise and got data
        .then((data) => {
            this.setState({location:data})
        })
        .catch((err) =>{
            console.log(err)
        })
    }
}

export default withRouter(Search)
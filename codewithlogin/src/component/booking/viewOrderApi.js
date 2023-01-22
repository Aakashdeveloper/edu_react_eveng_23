import React,{Component} from 'react';
import axios from 'axios';
import OrderDisplay from './orderDisplay';
import Header from '../../header';

const url ="http://localhost:6910/orders"

class ViewOrder extends Component{
    constructor(){
        super()

        this.state={
            orders:''
        }
    }
    render(){
        if(!sessionStorage.getItem('userdata')){
            return(
                <div>
                    <Header/>
                    <h1>Login First To Place Booking</h1>
                </div>
            )
        }
        return(
            <>
            <Header/>
           <OrderDisplay bookdata={this.state.orders}/>
           </>
        )
    }

    //
    componentDidMount(){
        if(this.props.location){
            var qparams = this.props.location.search;
            if(qparams){
                var data = {
                    "status":qparams.split('&')[0].split('=')[1],
                    "date":qparams.split('&')[2].split('=')[1],
                    "bank":qparams.split('&')[3].split('=')[1]
                }
                var id = qparams.split('&')[1].split('=')[1].split('_')[1];
                fetch(`${url}/${id}`,{
                    method:'PATCH',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(data)
                })
            }
        }
        axios.get(`${url}?email=${sessionStorage.getItem('userdata').split(',')[1]}`).then((res) => {this.setState({orders:res.data})})
    }
}

export default ViewOrder;
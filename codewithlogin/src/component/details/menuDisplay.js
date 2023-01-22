import React,{Component} from 'react';

class MenuDisplay extends Component{
    orderId = [];

    placeOrder = (id) => {
        this.orderId.push(`${id}`)
        this.props.finalOrder(this.orderId)
    }

    removeOrder = (id) => {
        this.orderId.splice(this.orderId.indexOf(id.toString()),1)
        this.props.finalOrder(this.orderId)
        
    }

    renderCart = (orders) => {
        console.log(">>>",orders)
        if(orders){
            return orders.map((item,index) => {
                return(
                    <b key={index}>{item} &nbsp;&nbsp;</b>
                )
            } )
        }
    }

    renderMenu = ({menudata}) => {
        if(menudata){
            return menudata.map((item) => {
                return(
                    <div key={item.menu_id}>
                        <div className="col-md-7">
                            <b>{item.menu_id}</b> &nbsp; 
                            <img src={item.menu_image} alt={item.menu_name} style={{width:80, height:80}}/>
                            &nbsp;&nbsp; {item.menu_name} - Rs.{item.menu_price}
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-primary" 
                            onClick={() => {this.placeOrder(item.menu_id)}}>
                                <span className="glyphicon glyphicon-plus"></span>
                            </button> &nbsp;
                            <button className="btn btn-danger"
                             onClick={() => {this.removeOrder(item.menu_id)}}>
                                <span className="glyphicon glyphicon-minus"></span>
                            </button>
                        </div>
                    </div>
                )
            })
        }
    }

    render(){
        console.log(this.orderId)
        return(
            <div>
                <div className="col-md-12 bg-success">
                    <h4>Item Added</h4>
                    Item number {this.renderCart(this.orderId)} added
                </div>
                <div className="col-md-12 bg-info">
                    {this.renderMenu(this.props)}
                </div>
            </div>
        )
    }
}


export default MenuDisplay
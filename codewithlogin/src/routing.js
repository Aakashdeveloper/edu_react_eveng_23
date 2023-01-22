import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Home from './component/home/Home';
import NotFound from './NotFound';
import ListingApi from './component/listing/listingApi';
import RestDetails from './component/details/restDetails';
import PlaceOrder from './component/booking/placeBooking';
import ViewOrder from './component/booking/viewOrderApi';
import Login from './component/login/Login';
import Register from './component/login/Register';

const Routing = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/list/:mealId" component={ListingApi}/>
                <Route exact path="/details/:restId" component={RestDetails}/>
                <Route exact path="/placeOrder/:restName" component={PlaceOrder}/>
                <Route exact path="/viewBooking" component={ViewOrder}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route component={NotFound}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing
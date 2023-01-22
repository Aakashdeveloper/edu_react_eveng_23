import React from 'react';

const BookingDisplay = (props) => {
    const renderTable = ({bookdata}) => {
        if(bookdata){
            return bookdata.map((item) => {
                return(
                    <tr key={item.id}>
                        <th>{item.id}</th>
                        <th>{item.hotel_name}</th>
                        <th>{item.name}</th>
                        <th>{item.phone}</th>
                        <th>{item.email}</th>
                        <th>Rs. {item.cost}</th>
                        <th>{item.date}</th>
                        <th>{item.status}</th>
                        <th>{item.bank}</th>
                        
                    </tr>
                )
            })
        }
    }

    return(
        <div className="container">
            <center><h3>Orders List</h3></center>
            <table className="table">
                <thead>
                    <tr>
                        <th>OrderId</th>
                        <th>HName</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Cost</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>BankName</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>
        </div>
    )
}

export default BookingDisplay
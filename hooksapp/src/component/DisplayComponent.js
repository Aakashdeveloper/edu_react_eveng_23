import React from 'react';

function DisplayComponent(props){

    const renderRest = ({myData}) => {
        if(myData){
            return myData.map((item) => {
                return(
                    <div key={item.restaurant_id}>
                        {item.restaurant_name}
                    </div>
                )
            })
        }
    }

    return(
        <div>
            <center>
                <h2>Restaurant List</h2>
                {renderRest(props)}
            </center>
        </div>
    )

}

export default DisplayComponent;
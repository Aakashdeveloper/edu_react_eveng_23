import React from 'react';

const Display = (props) => {

    const renderMovies = ({datalist}) => {
        if(datalist){
            return datalist.map((item) => {
                return (
                    <div key={item.id}>{item.name}</div>
                )
            })
        }

    }

    return(
        <center>
            <h2>Movies</h2>
            {renderMovies(props)}
        </center>
    )

}

export default Display
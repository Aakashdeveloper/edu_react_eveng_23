import React from 'react';
import {Link} from 'react-router-dom';
const QuickDisplay = (props) => {

    const listMeal = ({mealdata}) => {
        if(mealdata){
            return mealdata.map((item) => {
                return(
                    <Link to={`/list/${item.mealtype_id}`}>
                         <div className="tileContainer">
                            <div className="tileComponent1">
                                <img src={item.meal_image} alt="cardImg"/>
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    <a href="listing.html">{item.mealtype}</a>
                                </div>
                                <div className="componentSubHeading">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }

    return(
        <>
            {listMeal(props)}
        </>
    )
}

export default QuickDisplay
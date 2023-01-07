import React from 'react';
import {Link} from 'react-router-dom';

const QuickDisplay = (props) => {
    console.log(props)

    const listMeal = ({mealData}) => {
        if(mealData){
            return mealData.map((item) => {
                return(
                    <Link to={`/listing/${item.mealtype_id}`} key={item.mealtype_id}>
                        <div className="tileContainer">
                            <div className="tileComponent1">
                                <img src={item.meal_image} alt="breakfast"/>
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    {item.mealtype}
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
        <div className="cardMain">
            {listMeal(props)}
        </div>
    )
}

export default QuickDisplay;
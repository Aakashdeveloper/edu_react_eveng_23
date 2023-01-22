import React,{Component} from 'react';
import './QuickSearch.css';
import QuickDisplay from './QucikDisplay';
const url = "https://zomatoajulypi.herokuapp.com/quicksearch";

class QuickSearch extends Component{
    constructor(){
        super()

        this.state={
            mealType:''
        }
    }
    render(){
        return(
            <div className="quickSearch">
                <span id="QuickSearchHeading">
                    Quick Search
                </span>
                <span id="QuickSubHeading">
                    Find Restaurant By MealType
                </span>
                <QuickDisplay mealdata={this.state.mealType}/>
            </div>
        )
    }
    // api call 
    componentDidMount(){
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            this.setState({mealType:data})
        })
    }
}

export default QuickSearch;
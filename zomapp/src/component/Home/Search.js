import React,{Component} from 'react';
import './Search.css';

class Search extends Component {
    render(){
        return(
            <div id="search">
                <div id="logo">
                    <span>D!</span>
                </div>
                <div id="heading">
                    Find Best Place Near You
                </div>
                <div className="dropdown">
                    <select>
                        <option>----SELECT YOUR CITY----</option>
                        <option>Delhi</option>
                        <option>Mumbai</option>
                    </select>
                    <select id="restDrop">
                        <option>----SELECT YOUR RESTAURANTS----</option>
                        <option>Wow Momos</option>
                        <option>Dominos</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default Search
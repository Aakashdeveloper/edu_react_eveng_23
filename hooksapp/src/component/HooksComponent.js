import React,{useState,useEffect} from 'react';
import DisplayComponent from './DisplayComponent';

const url = "http://3.17.216.66:4000/restaurants"

function HooksComponent(){

    const [title] = useState('Hooks App')
    const [count,setCount] = useState(0)
    const [count1,setCount1] = useState(0);
    const [restaurants, setRestaurants] = useState()

    const updateCount = () => {
        setCount(count+1)
    }

    useEffect(() => {
        console.log("inside use effect")
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setRestaurants(data)
        })
    },[count,count1])

    return(
        <>
            <h1>{title}</h1>
            <h2>{count}</h2>
            <button onClick={updateCount}>Counter</button>
            <h2>{count1}</h2>
            <button onClick={() => {setCount1(count1+1)}}>Counter1</button>
            <DisplayComponent myData={restaurants}/>
        </>
        
    )
}

export default HooksComponent;
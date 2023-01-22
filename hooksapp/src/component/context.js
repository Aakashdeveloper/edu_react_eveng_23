import React,{Component} from 'react';
const MyContext = React.createContext();


class MyProvider extends Component {
    state={
        city:'London'
    }

    render(){
        return(
            <MyContext.Provider value={{state:this.state}}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

class City extends Component{

    render(){
        return(
            <div className="city">
                <MyContext.Consumer>
                    
                    {(data) => {
                        return(
                            <p>Hi To {data.state.city}</p>
                        )  
                    }}
                </MyContext.Consumer>
            </div>
        )
    }
}

class City1 extends Component{
    render(){
        return(
            <div className="city">
                <MyContext.Consumer>
                    {(context) => {
                        return(
                            <p>Hi To {context.state.city} 1</p>
                        )
                    }}
                </MyContext.Consumer>
            </div>
        )
    }
}

const Country = (props) => {
    return(
        <div className="country">
            <City/>
            <City1/>
        </div>
    )
}

class ContextComponent extends Component {
    render(){
        return(
            <MyProvider>
                <div>
                    <Country/>
                </div>   
            </MyProvider>
        )
    }
}

export default ContextComponent
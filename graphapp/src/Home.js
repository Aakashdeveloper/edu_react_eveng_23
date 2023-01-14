import React from 'react';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

const client = new ApolloClient({
    uri:'http://localhost:8600/graphql'
})

const GET_PRODUCTS = gql`
    query Products($id:Int){
        Products(id:$id){
            product_name
            Price,
            Brand
        }
    }
`

const Product = ()=>{
    return(
        <div>
            <Query query={GET_PRODUCTS} client={client} variables={{id:8}}>
                {(loading,error,data) => {
                    if(loading) return <div>Loading...</div>
                    if(error) return <div>Error...</div>
                    console.log(data)
                    return(
                        <div>
                            <h2>{data.Products.product_name}</h2>
                            <h2>{data.Products.Price}</h2>
                            <h2>{data.Products.Brand}</h2>
                        </div>
                    )
                }}
            </Query>
        </div>
    )
}

export default Product
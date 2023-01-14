const express = require('express');
const app = express();
const cors = require('cors');
const port = 8600;
const {graphqlHTTP } = require('express-graphql');
const schema = require('./Schema/schema');

app.use(cors());

app.use('/graphql',
    graphqlHTTP({
        schema:schema,
        graphiql:true
    })
)

app.listen(port,() => {
    console.log(`Listing to port ${port}`)
})
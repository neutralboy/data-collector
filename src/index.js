import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';

import root from './graphql/root';
import schema from './graphql/schema';

require('dotenv').config();
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@drugs-eob0d.mongodb.net/trackmd?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});


const port = process.env.PORT;
const app = express();


app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }));

app.listen(port, () => console.log(`App listening on port ${port}!`));
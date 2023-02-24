const {ApolloServer} = require('@apollo/server');
const mongoose = require('mongoose');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const { startStandaloneServer } = require('@apollo/server/standalone');

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const PORT = process.env.PORT || 8000;
const connectionString = 'mongodb://localhost/KanbanLocal'

// mongoose.connect(connectionString, {useNewUrlParser: true})
//     .then(() => {
//         console.log('MongoDB Connected');
//         return server.listen({port: PORT});
//     })
//     .then((res) => {
//         console.log(`Server running at ${res.url}`)
//     });
// mongodb+srv://admin:z$6$&mBec.eqBWk@kanban.qjtpr.mo

const { url } = startStandaloneServer(server, {
    listen: { port: 8000 },
});

console.log(`🚀  Server ready at: ${url}`);

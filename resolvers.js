const {mergeResolvers} = require('@graphql-tools/merge');
const cardResolvers = require('./modules/cards/cardResolver')
const userResolvers = require('./modules/cards/userResolver');

console.log(cardResolvers)

const resolver =mergeResolvers([
    cardResolvers,
    userResolvers
]);

console.log(resolver)

module.exports = resolver

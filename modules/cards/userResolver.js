
const cards = [
    { _id: 1 , name: 'Card 1' },
    { _id: 2 , name: 'Card 2' },
    { _id: 3 , name: 'Card 3' },
    { _id: 4 , name: 'Card 4' },
    { _id: 5 , name: 'Card 5' },
]

const userResolvers = {
    // Card: {},
    Query: {
        getAllUsers: () => cards,
        userByID: (parent, { id }) => cards.find( card => card.id === id),
    },
    // Mutation: {
    //     clientCreate,
    //     clientUpdateById,
    // }
};

module.exports = userResolvers;




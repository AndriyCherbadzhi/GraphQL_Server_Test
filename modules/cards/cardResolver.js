
const cards = [
    { _id: 1 , name: 'Card 1' },
    { _id: 2 , name: 'Card 2' },
    { _id: 3 , name: 'Card 3' },
    { _id: 4 , name: 'Card 4' },
    { _id: 5 , name: 'Card 5' },
]

const clientResolvers = {
    // Card: {},
    Query: {
        cardSearch: (parent, args) => {
            console.log("=========")
            console.log(args)
            console.log(parent)
            console.log("=========")

            let filterCards = cards
            if(args?.input?.name) {

                filterCards = cards.filter(card => {
                    return card.name.includes(args.input.name)
                });
            }

            return filterCards
        },

        cardByID: (parent, { id }) => cards.find( card => card.id === id),
    },
    Mutation: {
        createCard: (parent, args) => {
            console.log("args", args);
            const card = {_id: cards.length + 1, name: args.input.name}
            cards.push(card);
            return card
        }
        // clientUpdateById,
    }
};

module.exports = clientResolvers;




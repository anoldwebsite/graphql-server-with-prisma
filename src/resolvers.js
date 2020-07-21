const prismaSchema = require("../generated/prisma-client/prisma-schema");
const { prisma } = require("../generated/prisma-client");

const resolvers = {
    Query: {
        collections: (root, args, ctx, info) => ctx.prisma.collections({}, info),
        collection: (root, { id }, ctx) => ctx.prisma.collection({ id }),
        getCollectionByTitle: (root, { title }, ctx) => ctx.prisma.collection({ title }),
    },
    //We have written some mutations to update data
    Mutation: {
        createCollection: (root, { title }, { prisma }) => {
            return prisma.createCollection({ title });
        },
        createItem: (root, { name, price, imageUrl, collectionId }, { prisma }) => {
            return prisma.createItem({
                name,
                price,
                imageUrl,
                collection: {
                    connect: {
                        id: collectionId
                    }
                }
            })
        },
    },

    Item: {
        collection: ({ id }, args, context) => {
            return context.prisma.item({ id }).collection();
        }
    },
    Collection: {
        items: ({ id }, args, context) => {
            return context.prisma.collection({ id }).items();
        }
    }
};

module.exports = resolvers;
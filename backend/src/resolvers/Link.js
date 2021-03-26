module.exports = {
    id: (parent) => parent.id,
    description: (parent) => parent.description,
    url: (parent) => parent.url,
    postedBy: (parent, args, context, info) => {
        return context.prisma.link.findUnique({ where: { id: parent.id } }).postedBy();
    },
    votes: (parent, args, context, info) => {
        return context.prisma.link.findUnique({ where: { id: parent.id } }).votes();
    },
    createdAt: (parent) => parent.createdAt
};

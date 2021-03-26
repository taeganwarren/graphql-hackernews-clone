module.exports = {
    id: (parent) => parent.id,
    name: (parent) => parent.name,
    email: (parent) => parent.email,
    links: (parent, args, context, info) => {
        return context.prisma.user.findUnique({ where: { id: parent.id } }).links();
    },
    votes: (parent, args, context, info) => {
        return context.prisma.user.findUnique({ where: { id: parent.id } }).votes();
    }
};

module.exports = {
    id: (parent) => parent.id,
    link: (parent, args, context, info) => {
        return context.prisma.vote.findUnique({ where: { id: parent.id } }).link();
    },
    user: (parent, args, context, info) => {
        return context.prisma.vote.findUnique({ where: { id: parent.id } }).user();
    }
};

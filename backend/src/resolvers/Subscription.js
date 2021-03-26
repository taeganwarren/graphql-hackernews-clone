module.exports = {
    newLink: {
		subscribe: (parent, args, context, info) => {
			return context.pubsub.asyncIterator("NEW_LINK");
		},
		resolve: payload => {
			return payload;
		}
	},
	newVote: {
		subscribe: (parent, args, context, info) => {
			return context.pubsub.asyncIterator("NEW_VOTE");
		},
		resolve: payload => {
			return payload;
		}
	}
};

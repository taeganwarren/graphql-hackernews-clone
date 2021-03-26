const jwt = require('jsonwebtoken');
const APP_SECRET = 'GraphQL-is-aw3some';

function getTokenPayload(token) {
    return jwt.verify(token, APP_SECRET);
}

function getUserId(req, authToken) {
    if (req && req.headers.authorization) {
        const authHeader = req.headers.authorization;
        const token = authHeader.replace('Bearer ', '');
        if (!token) {
            throw new Error('No token found');
        }
        const { userId } = getTokenPayload(token);
        return userId;
    } else if (authToken) {
        const { userId } = getTokenPayload(authToken);
        return userId;
    } else {
        throw new Error('Not authenticated');
    }
}

module.exports = {
    APP_SECRET,
    getUserId
};

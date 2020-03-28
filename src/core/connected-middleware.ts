import jwt = require('express-jwt');

export const connected = () => {
    const secret = process.env.recipeJwtSecret;
    if (!secret) {
        throw new Error('Secret is not defined');
    }
    return jwt({ secret });
};

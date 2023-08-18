const jwt = require('jsonwebtoken');

require('dotenv').config();

export const secret = process.env.JWT_SECRET;
export const expiration = '2h';

module.exports = {
  signToken ({ email, firstName, lastName, _id }) {
    const payload = { email, firstName, lastName, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
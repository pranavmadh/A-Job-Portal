require('dotenv').config()

const USER_JWT_PASS = process.env.USER_JWT_PASS
const ADMIN_JWT_PASS = process.env.ADMIN_JWT_PASS

module.exports = {
    USER_JWT_PASS,
    ADMIN_JWT_PASS
}
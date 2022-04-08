import * as dotenv from 'dotenv'
dotenv.config()

const JWT_SECRET: string = process.env.JWT_SECRET || 'jwtSecret'
const JWT_EXPIRE: string = process.env.JWT_EXPIRE || '7d'

export {
    JWT_SECRET,
    JWT_EXPIRE,
}
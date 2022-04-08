import * as dotenv from 'dotenv'
dotenv.config()

const JWT_SECRET: string = process.env.JWT_SECRET || 'jwtSecret'

export {
    JWT_SECRET
}
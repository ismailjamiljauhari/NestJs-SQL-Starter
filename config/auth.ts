import * as dotenv from 'dotenv'
dotenv.config()

const JWT_SECRET: string = process.env.JWT_SECRET || 'jwtSecret'
const JWT_EXPIRE: string = process.env.JWT_EXPIRE || '7d'
const GOOGLE_CLIENT_ID: string = process.env.GOOGLE_CLIENT_ID || '930891391604 - tgk3983d0l4rf6a17djfs4ucubdcif7g.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET: string = process.env.GOOGLE_CLIENT_SECRET || 'GOCSPX - iLP9Y39dyat4vltxBEGrthyBrIqU'

export {
    JWT_SECRET,
    JWT_EXPIRE,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
}
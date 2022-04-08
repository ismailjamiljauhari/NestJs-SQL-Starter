import * as dotenv from 'dotenv'
dotenv.config()

const DATABASE_CONNECTION: string = process.env.DATABASE_CONNECTION || 'mysql'
const DATABASE_HOST: string = process.env.DATABASE_HOST || '127.0.0.1'
const DATABASE_NAME: string = process.env.DATABASE_NAME || 'sql-starter'
const DATABASE_PORT: number = +process.env.DATABASE_PORT || 3306
const DATABASE_USERNAME: string = process.env.DATABASE_USERNAME || 'root'
const DATABASE_PASSWORD: string = process.env.DATABASE_PASSWORD || 'root'

export {
    DATABASE_CONNECTION,
    DATABASE_HOST,
    DATABASE_NAME,
    DATABASE_PORT,
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
}
import * as dotenv from 'dotenv'
dotenv.config()

const APP_NAME: string = process.env.APP_NAME || 'NestJs'
const NODE_ENV: string = process.env.NODE_ENV || 'development'
const NODE_PORT: number = +process.env.NODE_PORT || 3000

export {
    APP_NAME,
    NODE_ENV,
    NODE_PORT,
}

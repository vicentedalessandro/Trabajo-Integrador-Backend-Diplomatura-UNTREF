process.loadEnvFile()

const MONGODB_URL_STRING = process.env.MONGODB_URL_STRING
const DATABASE_NAME = process.env.DATABASE_NAME

const URI = MONGODB_URL_STRING + DATABASE_NAME

export { URI }

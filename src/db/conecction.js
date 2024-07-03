import mongoose from 'mongoose'
import { URI } from '../config/mongodb.js'

const connectToDB = () => {
  mongoose.connect(URI)
    .then(() => console.log('Connection to the database successfully.'))
    .catch((e) => console.error('Error connecting database', e))
}

export { connectToDB }

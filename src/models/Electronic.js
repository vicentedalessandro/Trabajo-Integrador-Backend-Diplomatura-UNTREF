import { Schema, model } from 'mongoose'

const electronicSchema = new Schema(
  {
    codigo: {
      type: Number,
      require: true
    },
    nombre: {
      type: String,
      require: true
    },
    precio: {
      type: Number,
      default: 0,
      require: true
    },
    categorias: [
      {
        type: String,
        require: true
      }
    ]
  }
)

electronicSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v
  }
})

const Electronic = model('Electronic', electronicSchema)

export { Electronic }

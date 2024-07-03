import { Electronic } from '../models/Electronic.js'

const addNewElectronic = async (req, res) => {
  const body = req.body

  const newElectronic = new Electronic(
    {
      codigo: body.codigo,
      nombre: body.nombre,
      precio: body.precio,
      categorias: body.categorias
    }
  )

  try {
    const result = await newElectronic.save()
    res.status(201).json(result)
  } catch (e) {
    res.status(500).json(
      {
        response: 'Internal server error when trying to add the new electronic product.',
        error: e
      }
    )
  }
}

export { addNewElectronic }

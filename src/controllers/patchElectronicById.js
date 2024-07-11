import { Electronic } from '../models/Electronic.js'

const patchElectronicById = async (req, res) => {
  const { id } = req.params
  const body = req.body

  const patchElectronic = {
    codigo: body.codigo,
    nombre: body.nombre,
    precio: body.precio,
    categorias: body.categorias
  }

  try {
    const result = await Electronic.findByIdAndUpdate(id, { $set: patchElectronic }, { new: true })
    !result
      ? res.status(404).json({ response: 'Electronic product not found to patch.' })
      : res.status(200).json(result)
  } catch (e) {
    res.status(500).json(
      {
        response: 'Internal server error when trying to patch the electronic product.',
        error: e
      }
    )
  }
}

export { patchElectronicById }

import { Electronic } from '../models/Electronic.js'

const getElectronicById = async (req, res) => {
  const { id } = req.params

  try {
    const electronic = await Electronic.findById(id)
    electronic
      ? res.status(200).json(electronic)
      : res.status(404).json({ response: 'Electronic product not found.' })
  } catch (e) {
    res.status(500).json(
      {
        response: 'Internal server error when trying to obtain the electronic product.',
        error: e
      }
    )
  }
}

export { getElectronicById }

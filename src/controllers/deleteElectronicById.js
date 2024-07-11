import { Electronic } from '../models/Electronic.js'

const deleteElectronicById = async (req, res) => {
  const { id } = req.params

  try {
    const result = await Electronic.findByIdAndDelete(id)
    !result
      ? res.status(404).json({ response: 'Electronic product not found to delete.' })
      : res.status(200).json({ response: 'Electronic product removed.' })
  } catch (e) {
    res.status(500).json(
      {
        response: 'Internal server error when trying to delete the electronic product.',
        error: e
      }
    )
  }
}

export { deleteElectronicById }

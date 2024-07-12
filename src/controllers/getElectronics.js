import { Electronic } from '../models/Electronic.js'

const getElectronics = async (req, res) => {
  const { name, category } = req.query
  const query = !name
    ? !category
        ? {}
        : { categorias: { $regex: category, $options: 'i' } }
    : { nombre: { $regex: name, $options: 'i' } }

  try {
    const electronics = await Electronic.find(query)
    !electronics.length > 0
      ? res.status(404).json({ response: 'Electronic products not found.' })
      : res.status(200).json(electronics)
  } catch (e) {
    res.status(500).json(
      {
        response: 'Internal server error when trying to obtain the electronic products.',
        error: e
      }
    )
  }
}

export { getElectronics }

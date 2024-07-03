import { getElectronics } from './getElectronics.js'
import { getElectronicById } from './getElectronicById.js'
import { addNewElectronic } from './addNewElectronic.js'
import { patchElectronicById } from './patchElectronicById.js'
import { deleteElectronicById } from './deleteElectronicById.js'

const orchestrator = {
  getElectronics,
  getElectronicById,
  addNewElectronic,
  patchElectronicById,
  deleteElectronicById
}

export { orchestrator }

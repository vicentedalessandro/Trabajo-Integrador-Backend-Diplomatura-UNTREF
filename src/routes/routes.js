import { Router } from 'express'
import { orchestrator } from '../controllers/orchestrator.js'

const router = Router()

router.get('/', orchestrator.getElectronics)
  .get('/:id', orchestrator.getElectronicById)
  .post('/', orchestrator.addNewElectronic)
  .patch('/:id', orchestrator.patchElectronicById)
  .delete('/:id', orchestrator.deleteElectronicById)

export { router }

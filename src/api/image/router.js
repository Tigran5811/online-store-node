import { Router } from 'express';

import {
  createController,
  getAllController, getOneController,
  deleteController,
  getUsersImageController,
} from './controller.js';
import { expressValidationResult } from '../../utils/utils-middleware.js';
import {
  getOneValidation, deleteValidation,
} from './validation.js';

import { upload } from '../../utils/multer.js';

const router = Router();

router.get('/', getAllController);

router.post('/users', getUsersImageController);

router.get('/:id', ...getOneValidation(), expressValidationResult, getOneController);

router.delete('/:id', ...deleteValidation(), expressValidationResult, deleteController);

router.post('/', upload.single('image'), createController);

export default router;

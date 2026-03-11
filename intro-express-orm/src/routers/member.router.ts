import { Router } from 'express';
import { memberController } from '../controllers/member.controller';

const memberRouter = Router();

memberRouter.get('/', memberController?.getAll);
memberRouter.post('/', memberController?.create);

export default memberRouter;
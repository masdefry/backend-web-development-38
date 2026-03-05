import { Router } from 'express';
import { employeeController } from '../controllers/employee.controller';

const employeeRouter = Router();

employeeRouter.post('/', employeeController.create);
employeeRouter.get('/', employeeController.getAll)

export default employeeRouter; 
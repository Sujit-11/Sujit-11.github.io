import { Router } from 'express';
import * as todoController from '../controllers/todoController';
import { validateReqBody, validateReqQuery } from '../middleware/validator';
import { todoQuerySchema, todoSchema } from '../schema/todoSchema';

const router = Router();

router.get('/', todoController.getTodos);
router.get(
  '/:id',
  validateReqQuery(todoQuerySchema),
  todoController.getTodoById
);
router.post('/', validateReqBody(todoSchema), todoController.createTodo);
router.put('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

export default router;

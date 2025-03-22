import { Router } from "express";
import { UpdateController } from "../controllers/update.controller";
import { validateDto } from "../middleware/validate.dto";
import { UpdateTodoDto } from "../../core/application/dtos/update-todo.dto";

export function updateTodoRoute(controller: UpdateController) {
    const router = Router();
    router.put('/todos/:id', validateDto(UpdateTodoDto), controller.handle.bind(controller));
    return router;
  }
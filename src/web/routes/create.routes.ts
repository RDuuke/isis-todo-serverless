import { Router } from "express";
import { CreateController } from "../controllers/create.controller";
import { validateDto } from "../middleware/validate.dto";
import { CreateTodoDto } from "../dtos/create-todo.dto";

export function createTodoRoute(controller: CreateController) {
    const router = Router();
    router.post("/todos", validateDto(CreateTodoDto), controller.handle.bind(controller));
    return router;
}

import { Router } from "express";
import { UpdateController } from "../controllers/update.controller";

export function updateTodoRoute(controller: UpdateController) {
    const router = Router();
    router.put('/todos/:id', controller.handle.bind(controller));
    return router;
  }
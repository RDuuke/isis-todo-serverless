import { Router } from "express";
import { CreateController } from "../controllers/create.controller";

export function createTodoRoute(controller: CreateController) {
    const router = Router();
    router.post("/todos", controller.handle.bind(controller));
    return router;
}

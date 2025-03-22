import { Router } from "express";
import { ListController } from "../controllers/list.controller";

export function listTodoRoute(controller: ListController) {
    const router = Router();
    router.get("/todos", controller.handle.bind(controller));
    return router;
}
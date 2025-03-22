import { Router } from "express";
import { DeleteController } from "../controllers/delete.controller";

export function deleteTodoRoute(controller: DeleteController) {
    const router = Router();
    router.delete("/todos/:id", controller.handle.bind(controller));
    return router;
}
import { Request, Response } from "express";
import { UpdateTodoUseCase } from "../../core/application/update-todo.usecase";

export class UpdateController {
    constructor(private usecase: UpdateTodoUseCase) {}
    async handle(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const updated = await this.usecase.execute({ id, ...req.body });
            return res.status(200).json(updated);
        } catch (e: any) {
            return res.status(400).json({ error: e.message });
        }
    }
}
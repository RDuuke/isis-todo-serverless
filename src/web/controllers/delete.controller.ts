import { Request, Response } from "express";
import { DeleteTodoUsecase } from "../../core/application/delete-todo.usecase";

export class DeleteController {
    constructor(private usecase: DeleteTodoUsecase) {}

    async handle(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            await this.usecase.execute(id);
            return res.status(204).send();
          } catch (e: any) {
            return res.status(400).json({ error: e.message });
          }
    }
}
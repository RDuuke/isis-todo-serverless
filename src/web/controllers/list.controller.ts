import { Request, Response } from "express";
import { GetAllTodoUsecase } from "../../core/application/get-all-todo.usecase";

export class ListController {
    constructor(private usecase: GetAllTodoUsecase) {}

    async handle(req: Request, res: Response) {
        try {
            const todos = await this.usecase.execute();
            return res.status(200).json(todos);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
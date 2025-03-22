import { CreateTodoUseCase } from "../../core/application/create-todo.usecase";
import { Request, Response } from "express";

export class CreateController {
    constructor(private usecase: CreateTodoUseCase) {}

    async handle(req: Request, res: Response) {
        try {
            const todo = await this.usecase.execute(req.body.text);
            res.status(201).json(todo);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
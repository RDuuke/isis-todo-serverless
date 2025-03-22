import { TodoRepository } from "../domain/todo.repository";

export class DeleteTodoUsecase {
    constructor(private repository: TodoRepository) {}

    async execute(id: number): Promise<void> {
        return this.repository.delete(id);
    }
}
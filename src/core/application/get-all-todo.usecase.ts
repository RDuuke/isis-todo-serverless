import { TodoItem } from "../domain/todo.model";
import { TodoRepository } from "../domain/todo.repository";

export class GetAllTodoUsecase {
    constructor(private repository: TodoRepository) {}

    async execute(): Promise<TodoItem[]> {
        return this.repository.get();
    }
}
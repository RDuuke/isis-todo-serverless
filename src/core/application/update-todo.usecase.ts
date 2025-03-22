import { TodoItem } from "../domain/todo.model";
import { TodoRepository } from "../domain/todo.repository";

export class UpdateTodoUseCase {
    constructor(private repository: TodoRepository) {
        this.repository = repository;
    }
    async execute(todo: TodoItem): Promise<TodoItem> {
        const todo_update = await this.repository.update(todo);
        return todo_update;
    }
}
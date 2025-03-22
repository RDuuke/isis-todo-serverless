import { TodoItem } from "../domain/todo.model";
import { TodoRepository } from "../domain/todo.repository";

export class CreateTodoUseCase {
    constructor(private todoRepository: TodoRepository) {}

    async execute(text: string): Promise<TodoItem> {
        if (!text.trim()) {
            throw new Error("Text is required");
        }
        return this.todoRepository.create(text);
    }
}
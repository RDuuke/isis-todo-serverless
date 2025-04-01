import { TodoItem } from "../domain/todo.model";
import { TodoRepository } from "../domain/todo.repository";

export class CreateTodoUseCase {
    constructor(private todoRepository: TodoRepository) {}

    async execute(todo: Partial<TodoItem>): Promise<TodoItem> {
        if (!todo.text?.trim()) {
            throw new Error("Text is required");
        }
        return this.todoRepository.create(
            {
                ...todo,
                completed: todo.completed ?? false,
                dueDate: todo.dueDate
            }
        );
    }
}
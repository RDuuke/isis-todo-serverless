import { TodoItem } from "../../domain/todo.model";
import { TodoRepository } from "../../domain/todo.repository";

export class TodoMockRepository implements TodoRepository {
    private todos: TodoItem[] = [];
    private idCounter = 1;

    async create(text: string): Promise<TodoItem> {
        const todo: TodoItem = {
            id: this.idCounter++,
            text,
            completed: false
        };
        this.todos.push(todo);
        return todo;
    }

    async get(): Promise<TodoItem[]> {
        return this.todos;
    }

}
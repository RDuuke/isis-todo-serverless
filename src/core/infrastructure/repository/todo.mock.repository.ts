import { TodoItem } from "../../domain/todo.model";

export class TodoMockRepository {
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
}
import { TodoItem } from "../../domain/todo.model";
import { TodoRepository } from "../../domain/todo.repository";

export class TodoMockRepository implements TodoRepository {
    private todos: TodoItem[] = [];
    private idCounter = 1;

    async create(todo: Partial<TodoItem>): Promise<TodoItem> {
        const newTodo: TodoItem = {
            id: this.idCounter++,
            text: todo.text ?? "",
            completed: todo.completed ?? false,
            dueDate: todo.dueDate
        };
        this.todos.push(newTodo);
        return newTodo;
    }

    async get(): Promise<TodoItem[]> {
        return this.todos;
    }

    async update(todo: TodoItem): Promise<TodoItem> {
        const index = this.todos.findIndex(t => t.id === todo.id);
        if (index === -1) throw new Error('Todo not found');
        this.todos[index] = todo;
        return todo;
    }

    async delete(id: number): Promise<void> {
        const index = this.todos.findIndex(t => t.id === id);
        if (index === -1) throw new Error('Todo not found');
        this.todos.splice(index, 1);
    }
}
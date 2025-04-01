import { TodoItem } from "./todo.model";

export interface TodoRepository {
    create(todo: Partial<TodoItem>): Promise<TodoItem>;
    get(): Promise<TodoItem[]>;
    update(todo: TodoItem): Promise<TodoItem>;
    delete(id: number): Promise<void>;
}
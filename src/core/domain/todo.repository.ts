import { TodoItem } from "./todo.model";

export interface TodoRepository {
    create(text: string): Promise<TodoItem>;
}
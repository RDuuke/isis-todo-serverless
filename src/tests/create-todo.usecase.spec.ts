import { CreateTodoUseCase } from "../core/application/create-todo.usecase";
import { TodoMockRepository } from "../core/infrastructure/repository/todo.mock.repository";

describe('CreateTodoUseCase', () => {
    it('creates a todo', async () => {
      const repo = new TodoMockRepository();
      const useCase = new CreateTodoUseCase(repo);
      const todo = await useCase.execute('Hello');
      expect(todo.id).toBe(1);
      expect(todo.text).toBe('Hello');
    });
  });
  
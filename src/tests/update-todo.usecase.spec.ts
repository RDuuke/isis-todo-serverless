import { UpdateTodoUseCase } from "../core/application/update-todo.usecase";
import { TodoMockRepository } from "../core/infrastructure/repository/todo.mock.repository";


describe('UpdateTodoUseCase', () => {
  let useCase: UpdateTodoUseCase;
  let repo: TodoMockRepository;

  beforeEach(async () => {
    repo = new TodoMockRepository();
    await repo.create('Initial');
    useCase = new UpdateTodoUseCase(repo);
  });

  it('should update an existing todo', async () => {
    const updated = await useCase.execute({ id: 1, text: 'Updated', completed: true });
    expect(updated.completed).toBe(true);
    const todos = await repo.get();
    expect(todos[0]).toEqual(updated);
  });

  it('should throw if todo not found', async () => {
    await expect(useCase.execute({ id: 999, text: 'X', completed: false }))
      .rejects.toThrow('Todo not found');
  });
});

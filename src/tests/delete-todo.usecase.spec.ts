import { DeleteTodoUsecase } from "../core/application/delete-todo.usecase";
import { TodoMockRepository } from "../core/infrastructure/repository/todo.mock.repository";


describe('DeleteTodoUsecase', () => {
  let useCase: DeleteTodoUsecase;
  let repo: TodoMockRepository;

  beforeEach(async () => {
    repo = new TodoMockRepository();
    await repo.create({ text: 'Task 1', completed: false, dueDate: new Date('2023-10-01').toISOString() });
    useCase = new DeleteTodoUsecase(repo);
  });

  it('should delete an existing todo', async () => {
    await useCase.execute(1);
    const todos = await repo.get();
    expect(todos).toEqual([]);
  });

  it('should throw if todo not found', async () => {
    await expect(useCase.execute(999)).rejects.toThrow('Todo not found');
  });
});

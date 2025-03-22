import { GetAllTodoUsecase } from "../core/application/get-all-todo.usecase";
import { TodoMockRepository } from "../core/infrastructure/repository/todo.mock.repository";


describe('GetAllTodoUsecase', () => {
  let useCase: GetAllTodoUsecase;
  let repo: TodoMockRepository;

  beforeEach(() => {
    repo = new TodoMockRepository();
    useCase = new GetAllTodoUsecase(repo);
  });

  it('should return an empty array initially', async () => {
    const todos = await useCase.execute();
    expect(todos).toEqual([]);
  });

  it('should return all created todos', async () => {
    await repo.create('One');
    await repo.create('Two');
    const todos = await useCase.execute();
    expect(todos.length).toBe(2);
    expect(todos.map(t => t.text)).toEqual(['One', 'Two']);
  });
});

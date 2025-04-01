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
    await repo.create({ text: 'One', completed: false, dueDate: new Date('2023-10-01').toISOString() });
    await repo.create({ text: 'Two', completed: false, dueDate: new Date('2023-10-01').toISOString() });
    const todos = await useCase.execute();
    expect(todos.length).toBe(2);
    expect(todos.map(t => t.text)).toEqual([
      'One',
      'Two'
    ]);
  });
});

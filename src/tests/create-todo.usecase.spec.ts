import { CreateTodoUseCase } from "../core/application/create-todo.usecase";
import { TodoMockRepository } from "../core/infrastructure/repository/todo.mock.repository";

describe('CreateTodoUseCase', () => {
  let useCase: CreateTodoUseCase;
  let repo: TodoMockRepository;

  beforeEach(() => {
    repo = new TodoMockRepository();
    useCase = new CreateTodoUseCase(repo);
  });

  it('should create a new todo with valid text', async () => {
    const todo = await useCase.execute('Task 1');
    expect(todo).toMatchObject({ id: 1, text: 'Task 1', completed: false });
  });

  it('should throw if text is empty or whitespace', async () => {
    await expect(useCase.execute('')).rejects.toThrow('Text is required');
    await expect(useCase.execute('   ')).rejects.toThrow('Text is required');
  });
});

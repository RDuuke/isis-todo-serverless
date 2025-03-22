import 'dotenv/config';
import express from "express";
import cors from "cors";
import { CreateTodoUseCase } from "./core/application/create-todo.usecase";
import { TodoMockRepository } from "./core/infrastructure/repository/todo.mock.repository";
import { CreateController } from "./web/controllers/create.controller";
import { createTodoRoute } from "./web/routes/create.routes";
import { listTodoRoute } from "./web/routes/list.routes";
import { ListController } from "./web/controllers/list.controller";
import { GetAllTodoUsecase } from "./core/application/get-all-todo.usecase";
import { updateTodoRoute } from "./web/routes/upate.routes";
import { UpdateTodoUseCase } from "./core/application/update-todo.usecase";
import { UpdateController } from "./web/controllers/update.controller";
import { DeleteTodoUsecase } from "./core/application/delete-todo.usecase";
import { DeleteController } from "./web/controllers/delete.controller";
import { deleteTodoRoute } from "./web/routes/delete.routes";
import { apiKeyMiddleware } from './web/middleware/api-key.middleware';

const repo = new TodoMockRepository();
const create_usecase = new CreateTodoUseCase(repo);
const create_controller = new CreateController(create_usecase);
const get_usecase = new GetAllTodoUsecase(repo);
const list_controller = new ListController(get_usecase);
const update_usecase = new UpdateTodoUseCase(repo);
const update_controller = new UpdateController(update_usecase);
const delete_usecase = new DeleteTodoUsecase(repo);
const delete_controller = new DeleteController(delete_usecase);

const app = express();
app.use(cors({ origin: 'http://localhost:4200' }));

app.use(express.json());
app.use('/api/todos', apiKeyMiddleware);
app.use("/api", createTodoRoute(create_controller));
app.use("/api", listTodoRoute(list_controller));
app.use('/api', updateTodoRoute(update_controller));
app.use('/api', deleteTodoRoute(delete_controller));

app.listen(3000, () => console.log("Server is running on port 3000"));
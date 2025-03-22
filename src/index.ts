import express from "express";
import cors from "cors";
import { CreateTodoUseCase } from "./core/application/create-todo.usecase";
import { TodoMockRepository } from "./core/infrastructure/repository/todo.mock.repository";
import { CreateController } from "./web/controllers/create.controller";
import { createTodoRoute } from "./web/routes/create.routes";

const repo = new TodoMockRepository();
const usecase = new CreateTodoUseCase(repo);
const controller = new CreateController(usecase);

const app = express();
app.use(cors({ origin: 'http://localhost:4200' }));

app.use(express.json());
app.use("/api", createTodoRoute(controller));
app.listen(3000, () => console.log("Server is running on port 3000"));
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand, ScanCommand, UpdateCommand, DeleteCommand } from "@aws-sdk/lib-dynamodb";
import { TodoRepository } from "../../domain/todo.repository";
import { TodoItem } from "../../domain/todo.model";

const TABLE = process.env.DYNAMO_TABLE!;
const client = DynamoDBDocumentClient.from(new DynamoDBClient({ region: process.env.AWS_REGION }));

export class TodoDynamoRepository implements TodoRepository {

	async create(todo: Partial<TodoItem>): Promise<TodoItem> {
 		const item: TodoItem = {
			id: Date.now(),
			text: todo.text ?? "",
			completed: todo.completed ?? false,
			dueDate: todo.dueDate,
			important: todo.important ?? false
		};
		await client.send(new PutCommand({ TableName: TABLE, Item: item }));
		return item;
	}

	async get(): Promise<TodoItem[]> {
		const { Items } = await client.send(new ScanCommand({ TableName: TABLE }));
		return (Items ?? []) as TodoItem[];
	}

	async update(todo: TodoItem): Promise<TodoItem> {
		await client.send(new UpdateCommand({
			TableName: TABLE,
			Key: { id: todo.id },
			UpdateExpression: "SET #t = :t, completed = :c",
			ExpressionAttributeNames: { "#t": "text" },
			ExpressionAttributeValues: { ":t": todo.text, ":c": todo.completed }
		}));
		return todo;
	}

	async delete(id: number): Promise<void> {
		await client.send(new DeleteCommand({ TableName: TABLE, Key: { id } }));
	}
}

# ToDo Backend Microservice

Un microservicio Node.js + TypeScript siguiendo Clean Architecture para gestionar tareas (CRUD) vía HTTP API. Permite alternar entre almacenamiento en memoria (mock) y DynamoDB, y protege endpoints con API Key.

---

## 📋 Requisitos

- Node.js ≥18.x  
- npm ≥9.x  
- AWS CLI (solo si usarás DynamoDB local o remoto)  

---

## ⚙️ Configuración

Crea un archivo `.env` en la raíz del proyecto:

```ini
API_KEY=tu-api-key-secreta
USE_DYNAMO=false           # true → DynamoDB; false → mock en memoria
DYNAMO_TABLE=TodosTable
AWS_REGION=us-east-1
CORS_ORIGIN=http://localhost:4200
```

## 📥 Instalación

```bash
git clone https://github.com/RDuuke/isis-todo-serverless
cd backend-app
npm install
```

## 🚧 Desarrollo local
```bash
npm run dev
```

- Levanta Express en http://localhost:3000
- Carga en memoria (USE_DYNAMO=false)
- API Key requerido en header x-api-key

## 🔁 Endpoints
| Método | Ruta             | Descripción           | Body JSON                                |
|--------|------------------|-----------------------|------------------------------------------|
| POST   | `/api/todos`     | Crear tarea           | `{ "text":"Comprar leche", "completed":false }` |
| GET    | `/api/todos`     | Listar todas tareas   | —                                        |
| PUT    | `/api/todos/:id` | Actualizar tarea      | `{ "text":"Nuevo texto", "completed":true }` |
| DELETE | `/api/todos/:id` | Eliminar tarea        | —                                        |

## 🔒 Seguridad
Todas las peticiones requieren:`x-api-key: tu-api-key-secreta` Si falta o es inválida → 401 Unauthorized

## 📦 Cambiar a DynamoDB

1. Asegúrate de tener la tabla creada.
2. En .env, cambia USE_DYNAMO=true.
3. Configura DYNAMO_TABLE y AWS_REGION.

El repositorio se intercambia automáticamente al iniciar.

## 📂 Estructura principal
```
src/
├─ core/                # Domain, UseCases, Repositorios (mock + Dynamo)
├─ web/                 # Controllers + Routes + Middleware
├─ test/                # Test
└─ index.ts             # Entrypoint Express 
```
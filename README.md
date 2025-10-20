# 🧩 Project Management API

A **backend test project** built to demonstrate clean architecture, RESTful design, and integration of modern backend technologies.  
This service implements a **CRUD API for managing projects**, supporting operations such as creation, update, deletion, and retrieval of project data — including filtering and statistics by project status.

---

## 🚀 Features

- Create, update, delete, and retrieve projects.
- Filter projects by status (`In progress` or `Finished`).
- Retrieve simple graphics/statistics based on project status.
- API documentation using **Swagger**.
- Schema validation with **Joi**.
- Integration with **OpenAI (DeepSeek)** for AI features.
- Dockerized environment using **PostgreSQL** and **Docker Compose**.
- Configurable environment variables via **dotenv**.

---

## 🧠 Tech Stack

| Category | Technology |
|-----------|-------------|
| Language | **Node.js v24**, **JavaScript (ES2023)** |
| Framework | **Express.js** |
| ORM | **Sequelize** |
| Database | **PostgreSQL (Dockerized)** |
| Documentation | **Swagger (OpenAPI)** |
| Validation | **Joi** |
| Configuration | **dotenv** |
| Containerization | **Docker**, **Docker Compose** |
| Version Control | **Git** |
| OS | **Linux-based environment** |
| AI Integration | **OpenAI SDK (DeepSeek model)** |

---

## 🧩 Database Schema

### Project Attributes

| Attribute | Type | Description |
|------------|------|-------------|
| `id` | Integer (PK, Auto Increment) | Unique project identifier |
| `name` | String | Project name |
| `description` | String | Project description |
| `status` | Enum (`In progress`, `Finished`) | Current project status |
| `startDate` | Date | Project start date |
| `finishDate` | Date (nullable) | Project completion date |

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/project-management-api.git
cd project-management-api
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Set up environment variables
Create a `.env` file in the root directory:

```bash
PORT=3000
DB_HOST=postgres
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=projects_db
DB_PORT=5432
OPENAI_API_KEY=your_openai_api_key_here
```

### 4️⃣ Run with Docker Compose
Start the PostgreSQL container and the Node.js API:

```bash
docker-compose up --build
```

This will:
- Build the Node.js API container
- Create a PostgreSQL container
- Automatically run migrations (if configured)

### 5️⃣ Access the API
Once running, you can access:

- **API Base URL:** `http://localhost:3000/api/v1/project`
- **Swagger UI:** `http://localhost:3000/api-docs`

---

## 🧪 API Endpoints

All endpoints are grouped under the `/api/v1/project` base path.

| Method | Endpoint | Description |
|--------|-----------|-------------|
| **POST** | `/` | Create a new project |
| **GET** | `/` | Retrieve all projects |
| **GET** | `/graphics?status={status}` | Retrieve statistics/graphics filtered by project status |
| **GET** | `/{id}` | Retrieve a project by ID |
| **PATCH** | `/{id}` | Update a project |
| **DELETE** | `/{id}` | Delete a project |

### 🧾 Example Request Bodies

#### Create Project
```json
{
  "name": "New Project",
  "description": "This is a new project",
  "status": "In progress"
}
```

#### Update Project
```json
{
  "status": "Finished",
  "finishDate": "2025-10-19T21:57:59.215Z"
}
```

### ✅ Example Responses

#### Successful Creation (201)
```json
{
  "message": "Project was created with success!",
  "data": {
    "id": 4,
    "name": "New Project",
    "description": "This is a new project",
    "status": "In progress",
    "startDate": "2025-10-19T21:57:14.262Z",
    "finishDate": null
  }
}
```

#### Successful Retrieval (200)
```json
{
  "message": "Projects were obtained with success!",
  "data": [
    {
      "id": 1,
      "name": "Project A",
      "description": "Initial test project",
      "status": "In progress",
      "startDate": "2025-10-18T22:00:00.000Z",
      "finishDate": null
    }
  ]
}
```

---

## 🧰 Development Scripts

| Command | Description |
|----------|-------------|
| `npm run start:dev` | Run server in development mode with nodemon |
| `npm run start:prod` | Start the production server |
| `docker-compose up` | Run the app and PostgreSQL in Docker |

---

## 🧠 Swagger Documentation

The project includes **auto-generated Swagger documentation** available at:

> 🗂️ `http://localhost:3000/api-docs`

The OpenAPI documentation is defined through JSDoc-style comments within each router file.

---

## 🧩 AI Integration (DeepSeek)

The project integrates with **OpenAI’s API**, leveraging the **DeepSeek model** for AI-driven enhancements such as:
- Intelligent summaries
- Insights for project completion rates

To use AI features, make sure to set your OpenAI API key in `.env`.

---

## 🧱 Technical Notes

- Sequelize is configured with PostgreSQL through Docker Compose.
- Validation middleware uses Joi schemas for both request body and query parameters.
- Response consistency is managed through a `response-manager` utility.
- The project follows RESTful principles and clean modular structure.
- Environment variables are managed through `.env` and `dotenv`.

---

## 🧑‍💻 Author

**Developed by:** Álvaro Narváez  
**Purpose:** Technical test for backend evaluation  

---


## 🧩 Project Setup and Run Instructions

### 1. Environment Configuration
- Create a `.env` file based on the existing `.env.example` in the root directory.
- Configure your database connection by creating a `database.json` file inside `src/config/db/`, using the provided `database.json.example` as a reference.

**Example configuration:**
```json
{
  "development": {
    "username": "root",
    "password": "root",
    "database": "glocation",
    "host": "localhost",
    "dialect": "postgres"
  }
}
```

### 2. Environment Selection
- For local development, use `.env.dev`.
- For production, use `.env.prod`.

### 3. Scripts Overview

```json
"scripts": {
  "start": "node src/index.js",
  "docker-compose-run:dev": "docker compose --env-file .env.dev -f docker-compose.dev.yml up -d",
  "docker-compose-stop:dev": "docker compose --env-file .env.dev -f docker-compose.dev.yml down",
  "start:dev": "npm run docker-compose-run:dev && NODE_ENV=dev dotenv -e .env.dev npx nodemon src/index.js",
  "start:prod": "docker compose --env-file .env.prod up --build",
  "migration:generate": "sequelize-cli migration:generate",
  "migration:run": "sequelize-cli db:migrate",
  "migration:undo": "sequelize-cli db:migrate:undo"
}
```

### 4. Running the Project

#### 🧪 Local Development
1. Run database container:
   ```bash
   npm run docker-compose-run:dev
   ```
2. Run migrations:
   ```bash
   npm run migration:run
   ```
3. Start the backend in dev mode:
   ```bash
   npm run start:dev
   ```

#### 🐳 Docker Production Mode
1. Run migrations:
   ```bash
   npm run migration:run
   ```
2. Build and start the app with Docker:
   ```bash
   npm run start:prod
   ```

This will spin up both the backend service and a PostgreSQL 16 instance defined in the Docker Compose file.

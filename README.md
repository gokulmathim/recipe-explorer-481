# Project Repository

This is the initial README file for the project.

## Backend API: recipe_backend_api

This Express backend exposes a RESTful API for retrieving and searching recipes.

### Endpoints

- `GET /recipes` — List all recipes. Supports filtering:
  - `?category=<category>` — filter by category
  - `?ingredient=<ingredient>` — filter by ingredient
  - `?maxCookingTime=<minutes>` — filter by max cooking time
  - `?search=<text>` — search in recipe title/description
- `GET /recipes/{id}` — Recipe details by ID
- `GET /recipes/categories/all` — List unique categories
- `GET /recipes/ingredients/all` — List unique ingredients
- `GET /` — Health check

### OpenAPI Docs

API documentation available at `/docs`.

### Configuration

- `PORT`: port the server listens on (default: `3000`)
- `HOST`: server bind address (default: `0.0.0.0`)

You may create a `.env` file in `recipe_backend_api` to override ENV values:

```
PORT=4000
HOST=127.0.0.1
```

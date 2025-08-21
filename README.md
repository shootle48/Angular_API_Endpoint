# Mini Project (Angular) — README

Project overview
- Simple Angular example app that performs CRUD operations for "employees" against an API endpoint.
- HTTP client and API logic are separated under `src/services/` (`httpsClient.ts` + `employee.service.ts`).

Repository layout (key files)
- src/main.ts — application bootstrap
- src/index.html — host page
- src/styles.css, src/app/app.css, src/app/item/item.css — styles
- src/app/app.ts, src/app/app.html — root component
- src/app/item/item.ts, src/app/item/item.html — item / list component
- src/services/httpsClient.ts — configured HTTP client (baseURL, headers, interceptors)
- src/services/employee.service.ts — functions that call the API (GET/POST/PUT/DELETE)
- src/app/*.spec.ts, src/app/item/*.spec.ts — unit tests

Install and run (development)
```sh
npm install
npm run start
```

Build and tests
- Build production bundle: npm run build
- Run unit tests: npm run test

API usage and endpoints (convention)
- GET /employees        — list all employees
- GET /employees/:id    — get employee by id
- POST /employees       — create a new employee (JSON body)
- PUT /employees/:id    — update employee by id (JSON body)
- DELETE /employees/:id — delete employee by id

How the app calls the API
1. Configure the API base URL in src/services/httpsClient.ts (use environment variables for different environments).
2. Use the exported methods in src/services/employee.service.ts to call endpoints.
3. Components (e.g., App, Item) import the service and call methods to load, create, update, and delete employees.

Example service API (pattern)
```ts
// example: src/services/employee.service.ts
import http from './httpsClient';

export const getEmployees = () => http.get('/employees');
export const getEmployee = (id: string|number) => http.get(`/employees/${id}`);
export const createEmployee = (data: any) => http.post('/employees', data);
export const updateEmployee = (id: string|number, data: any) => http.put(`/employees/${id}`, data);
export const deleteEmployee = (id: string|number) => http.delete(`/employees/${id}`);
```

CORS and proxy notes
- If the browser blocks requests (CORS), enable CORS on the backend or configure a dev proxy (Angular CLI proxy) to avoid CORS during development.
- For local backends, set baseURL to http://localhost:PORT in httpsClient.ts or use environment configuration.

Debugging tips
- Check Network tab in browser devtools for request/response and headers.
- Inspect console output in VS Code terminal for runtime/build errors.
- Add logging or error handling in httpsClient interceptors to surface API errors.

Next steps / improvements
- Add environment-specific config (environments files or env vars).
- Add form validation and better error UI for CRUD operations.
- Convert service to return typed observables/promises and add unit tests for API calls.

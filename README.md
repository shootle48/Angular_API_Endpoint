# MiniProject

โปรเจคตัวอย่างที่สร้างด้วย Angular 20 (แสดงการใช้ standalone components, services และ HTTP client)

## รูปแบบโปรเจค (สำคัญ)
- จุดเข้าแอป: [src/main.ts](src/main.ts) (เรียก [`bootstrapApplication`](src/main.ts) กับ [`appConfig`](src/app/app.config.ts))
- คอมโพเนนต์หลัก: [`App`](src/app/app.ts) — เทมเพลต: [src/app/app.html](src/app/app.html)
- คอมโพเนนต์รายการพนักงาน: [`Item`](src/app/item/item.ts) — เทมเพลต: [src/app/item/item.html](src/app/item/item.html)
- เซอร์วิส HTTP: [`employeeService`](src/services/employee.service.ts) ใช้ HTTP client ที่กำหนดใน [src/services/httpsClient.ts](src/services/httpsClient.ts)
- หน้า HTML หลัก: [src/index.html](src/index.html)
- สไตล์ global: [src/styles.css](src/styles.css)

โครงสร้างไฟล์เต็มอยู่ในโฟลเดอร์ `src/` (ดูไฟล์ตัวอย่างข้างต้น)

## ติดตั้งและรัน
การติดตั้ง dependencies และรันเซิร์ฟเวอร์พัฒนา:
```sh
npm install
npm run start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

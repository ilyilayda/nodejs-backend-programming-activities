# Day 03 - Express Routes and Middleware

This project contains examples of routing, modular routes, and middleware usage with Express.js.

## Topics Covered

- Express.js basics
- Creating routes
- GET, POST, PUT, and DELETE methods
- Route parameters
- Modular routing with `express.Router()`
- Middleware structure
- JSON responses
- Running multiple Express examples

## Project Structure

```text
day-03-express-routes-and-middleware
│
├── middleware
│   └── middleware.js
│
├── routes
│   ├── app.js
│   ├── kullanici.js
│   └── urun.js
│
├── http.js
├── route.js
├── package.json
├── package-lock.json
└── README.md
```

## Installation

First, open the project folder in the terminal:

```bash
cd day-03-express-routes-and-middleware
```

Install the required dependencies:

```bash
npm install
```

## Running the Examples

### 1. Basic Express Example

Run:

```bash
node http.js
```

The server runs on:

```text
http://localhost:3000
```

Available routes include:

```text
/
/hakkinda
/iletisim
```

### 2. Product Routes Example

Run:

```bash
node route.js
```

The server runs on:

```text
http://localhost:5000
```

Example endpoint:

```text
http://localhost:5000/urunler
```

This example includes:

```text
GET    /urunler
POST   /urunler
PUT    /urunler/:id
DELETE /urunler/:id
```

### 3. Modular Routes Example

Run:

```bash
node routes/app.js
```

The server runs on:

```text
http://localhost:5000
```

Example routes:

```text
http://localhost:5000/kullanici/kullanici
http://localhost:5000/urun/urun
```

The route files are separated into different modules using `express.Router()`.

## Technologies

- Node.js
- Express.js
- JavaScript

## Notes

The `node_modules` folder is not included in the repository.

After cloning the project, run:

```bash
npm install
```

to install the required packages.

## Author

İlayda

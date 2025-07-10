# Gigglle Challenge Submission Backend

## Setup Instructions

```bash
npm install
node app.js
```

## Features Completed

- REST API endpoints for managing coding challenges (`/challenges`)
- REST API endpoints for handling user submissions (`/submissions`)
- JSON request/response support
- Middleware for parsing request bodies
- Console ASCII art and colored startup message

## Assumptions / Tradeoffs

- The backend uses in-memory data or simple file storage (no database integration assumed).
- No authentication or authorization is implemented.
- Error handling is basic and may need improvement for production use.
- The API is designed for local development and testing, not for deployment.
- Only essential dependencies are included for simplicity.
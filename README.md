Title: "📚 Book Search Application"
description: >
  A simple Book Search Application built with Node.js, Elasticsearch, and React.js.
  Users can search for books by title, author, or category with fuzzy search,
  phonetic search, aggregations, autocomplete, and pagination.

table_of_contents:
  - Features
  - Technologies
  - Project Structure
  - Setup Instructions
    - Backend
    - Frontend
  - Usage
  - Notes
  - Backend Code
  - Frontend Code

features:
  - "Search books by title, author, or category"
  - "Fuzzy search for typo tolerance"
  - "Phonetic search for better search matching"
  - "Aggregations: Group results by author and year of publication"
  - "Autocomplete suggestions for titles and authors"
  - "Pagination support for search results"
  - "Dynamic React frontend with loading state"

technologies:
  backend:
    - Node.js
    - Express.js
  search_engine:
    - Elasticsearch
  frontend:
    - React.js
    - Material-UI
  api_requests:
    - Axios
  other:
    - dotenv

project_structure:
  backend:
    - app.js
    - elastic.js
    - indexBooks.js
    - package.json
    - routes:
        - search.js
    - .gitignore
  frontend:
    src:
      - App.jsx
      - services:
          - api.js
      - components:
          - SearchBar.jsx
          - BookList.jsx
          - Loader.jsx
    - package.json

setup_instructions:
  backend:
    steps:
      - "Clone the repository: git clone <repo-url> && cd backend"
      - "Install dependencies: npm install"
      - "Create a .env file with ELASTIC_CLOUD_ID, ELASTIC_USERNAME, ELASTIC_PASSWORD"
      - "Index sample books: node indexBooks.js"
      - "Start server: node app.js"
      - "Backend runs at: http://localhost:8080"
  frontend:
    steps:
      - "Navigate to frontend folder: cd frontend"
      - "Install dependencies: npm install"
      - "Start frontend: npm start"
      - "Frontend runs at: http://localhost:3000"

usage:
  instructions:
    - "Use the search bar to enter title, author, or category"
    - "Autocomplete suggestions appear while typing"
    - "Aggregations by author/year are returned in the API"
    - "Pagination supported via API request with page and size parameters"
  example_request:
    query: "Harry Potter"
    category: "Fiction"
    author: "J.K. Rowling"
    page: 1
    size: 10
  example_response:
    books: []
    aggregations:
      by_author: {}
      by_year: {}
    suggestions:
      titles: []
      authors: []
    page: 1
    size: 10

notes:
  - "Ensure Elasticsearch is running locally or Elastic Cloud credentials are correct."
  - "Backend and frontend must run simultaneously."
  - "Use indexBooks.js to regenerate sample book data."

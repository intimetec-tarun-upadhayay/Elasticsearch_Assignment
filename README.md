# Book Search Application

This is a simple Book Search Application built using a **Node.js/Express** backend, **Elasticsearch** (Elastic Cloud) for high-performance searching, and a **React.js** frontend.

[cite_start]The application allows users to search for books by title, author, and category, with search results updating dynamically as the user types[cite: 4, 5].

---

## [cite_start]Technologies Used [cite: 44, 45]

* [cite_start]**Backend:** Node.js, Express.js [cite: 45]
* [cite_start]**Search Engine:** Elasticsearch (Elastic Cloud) [cite: 8, 45]
* [cite_start]**Frontend:** React.js, Axios/Fetch [cite: 45]
* [cite_start]**Styling:** CSS (or optional UI Framework) [cite: 45]

---

## Project Folder Structure

### 1. Backend

The backend directory handles the API and Elasticsearch integration.
elasticsearch-assignment-backend/
├── src/
│   ├── app.js         # Main Express application setup and server initialization.
│   ├── elastic.js     # Elasticsearch client connection and utility functions.
│   └── routes/
│       └── search.js  # Defines the POST /api/search endpoint and calls search logic.
├── package.json
### 2. Frontend

The frontend directory contains the React application.

book-search-frontend/
└── src/
├── components/
│   ├── SearchBar.js   # Contains the search input and category filter dropdown.
│   ├── BookList.js    # Renders the search results and pagination controls.
│   └── Loader.js      # Component for the loading state indicator.
├── services/
│   └── api.js         # Handles the API calls to the Node.js backend (/api/search).
├── App.js             # Main component managing state and rendering components.
└── index.js


---

## Setup and Running Instructions

Follow these steps to set up and run the entire project.

### Prerequisites

* Node.js (LTS version recommended)
* An **Elastic Cloud** account with a running deployment.

### 1. Elasticsearch Setup (Elastic Cloud)

1.  **Create a Deployment:** Set up a new Elastic Cloud deployment.
2.  **API Key/Credentials:** Obtain your **Cloud ID** and an **API Key** or **Username/Password** for your deployment.
3.  **Index Creation:** The following steps must be executed to create the `books` index with the correct mappings, including configuration for fuzzy and phonetic search:
    * [cite_start]Fields: `title` (text), `author` (text), `category` (keyword), and `published_date` (date)[cite: 9].
    * [cite_start]**Phonetic Analyzer:** A custom analyzer must be configured to enable phonetic search[cite: 17].
    *A detailed list of the Elasticsearch index creation steps, mappings, and how to populate it with sample book data is provided in a file within the backend directory (e.g., `elasticsearch-assignment-backend/docs/index_setup.md`).*

### 2. Backend Setup (`elasticsearch-assignment-backend`)

The backend connects to your Elastic Cloud instance and exposes the search API.

1.  **Navigate to the backend directory:**
    ```bash
    cd elasticsearch-assignment-backend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Configure Environment Variables:** Create a **`.env`** file in the root of the `elasticsearch-assignment-backend` directory to store your Elastic Cloud connection details:
    ```
    # Example .env configuration for Elastic Cloud
    ELASTIC_CLOUD_ID="<YOUR_CLOUD_ID>"
    ELASTIC_API_KEY="<YOUR_API_KEY>"
    # OR (if using basic auth)
    # ELASTIC_USERNAME="<YOUR_USERNAME>"
    # ELASTIC_PASSWORD="<YOUR_PASSWORD>"

    PORT=5000
    ELASTIC_INDEX_NAME=books
    ```
4.  **Run the server:**
    ```bash
    npm start
    ```
    The API server should be running on `http://localhost:5000`.

### 3. Frontend Setup (`book-search-frontend`)

The frontend handles the user interface and interacts with the Node.js API.

1.  **Navigate to the frontend directory:**
    ```bash
    cd book-search-frontend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Configure API URL:** Ensure the React app's API service (`src/services/api.js`) points to your running backend: `http://localhost:5000/api/search`.
4.  **Run the React application:**
    ```bash
    npm start
    ```
    The frontend application should open in your browser, typically at `http://localhost:3000`.

---

## Core Functionality

The application must demonstrate the following features:

* [cite_start]**Endpoint:** `POST /api/search` accepts `query` (search term), optional `category`, and optional `author`[cite: 11].
* [cite_start]**Search Logic:** Searches across `title` and `author` fields, with filtering by `category`[cite: 4, 12].
* [cite_start]**Fuzzy Search:** Implements Elasticsearch's **fuzzy query** to handle typos in the search term[cite: 15, 16].
* [cite_start]**Phonetic Search:** Uses **Elasticsearch's phonetic analyzers** for improved search results based on sound[cite: 15, 17].
* [cite_start]**Aggregations:** Returns results grouped by **author** and **year of publication**, showing the book count for each[cite: 13, 14].

---

## Evaluation Criteria

* [cite_start]**Functionality:** Search works and returns relevant results[cite: 36].
* [cite_start]**Code Quality:** Clean, readable, and maintainable code[cite: 37].
* [cite_start]**User Interface:** Simple, user-friendly interface with proper error handling and **loading state**[cite: 38].
* [cite_start]**Elasticsearch Integration:** Correct and efficient querying[cite: 39].

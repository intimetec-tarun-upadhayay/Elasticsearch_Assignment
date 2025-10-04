# Book Search Application

This is a simple Book Search Application built using a **Node.js/Express** backend, **Elasticsearch** for high-performance searching, and a **React.js** frontend.

The application allows users to search for books by title, author, and category, with search results updating dynamically as the user types.

---

## Technologies Used

* **Backend:** Node.js, Express.js
* **Database/Search Engine:** Elasticsearch
* **Frontend:** React.js, Axios/Fetch
* **Styling:** CSS (or optional UI Framework)

---

## Project Breakdown

The assignment is divided into two main parts:

### Part 1: Backend (Node.js & Elasticsearch)

The backend handles the API and search logic.

* [cite_start]**Elasticsearch Setup:** An index for books is created with fields: `title` (text), `author` (text), `category` (keyword), and `published_date` (date)[cite: 9].
* [cite_start]**API Endpoint:** A `POST /api/search` endpoint is implemented to handle search queries[cite: 11].
* [cite_start]**Advanced Search:** The API uses **Elasticsearch Query DSL** to search the `title` and `author` fields and filter by `category`[cite: 12].
* [cite_start]**Aggregations:** The results are grouped by author and year of publication, showing the count of books for each[cite: 13, 14].
* [cite_start]**Fuzzy/Phonetic Search:** Implements **fuzzy query** for handling typos and **phonetic search** using Elasticsearch's phonetic analyzers for improved search results[cite: 15, 16, 17].

### Part 2: Frontend (React.js)

The frontend provides the user interface for searching and viewing results.

* [cite_start]**Interface:** Includes a search bar and an optional dropdown filter for categories[cite: 21, 22].
* [cite_start]**Dynamic Results:** Search results are displayed dynamically below the search bar as the user types[cite: 5, 22].
* [cite_start]**API Integration:** Uses Axios or Fetch API to call the `/api/search` endpoint[cite: 23].
* [cite_start]**Display:** Shows the book's title, author, and category in a list format[cite: 24].
* [cite_start]**User Experience:** Implements a **loading state** while data is being fetched[cite: 25, 38].

---

## Setup and Running Instructions

Follow these steps to set up and run the entire project.

### Prerequisites

* Node.js (LTS version recommended)
* Elasticsearch (Installed locally, or accessible via Docker/Cloud)

### 1. Elasticsearch Setup

You must have Elasticsearch running before starting the backend.

1.  [cite_start]**Install/Run Elasticsearch:** Set up Elasticsearch locally or use a cloud/Docker instance[cite: 8].
2.  **Index Creation:** Execute the following steps to create the `books` index and configure the mappings, including the setup for phonetic analysis.

    [cite_start]*A detailed list of the Elasticsearch index creation steps and how to populate it with sample book data is provided in the `backend/elasticsearch_setup.md` file.* [cite: 31]

### 2. Backend Setup (Node.js/Express)

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Configure Environment Variables:** Create a `.env` file in the `backend` directory and configure your Elasticsearch connection details (e.g., `ELASTICSEARCH_HOST=http://localhost:9200`).
4.  **Run the server:**
    ```bash
    npm start
    ```
    The API server should be running on `http://localhost:5000` (or the port you configure).

### 3. Frontend Setup (React.js)

1.  **Navigate to the frontend directory:**
    ```bash
    cd ../frontend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Configure API URL:** Ensure the React application is configured to point to your backend API (e.g., `http://localhost:5000/api/search`).
4.  **Run the React application:**
    ```bash
    npm start
    ```
    The frontend application should open in your browser, typically at `http://localhost:3000`.

---

## Documentation and Deliverables

The repository includes the following deliverables:

1.  [cite_start]**Backend (Node.js & Elasticsearch):** A working Node.js API with all search and aggregation logic[cite: 27].
2.  [cite_start]**Frontend (React.js):** A functional React application[cite: 30].
3.  [cite_start]**Elasticsearch Setup:** Clear code and documentation on how the Elasticsearch index was created and populated[cite: 28, 31, 43].

[cite_start]**Ensure all steps, including Elasticsearch setup, are well-documented.** [cite: 43]

---

## Bonus Features (Optional)

The following optional features have been implemented/are planned:

* [cite_start]**Pagination:** Added pagination to display a limited number of search results per page[cite: 18, 33].
* [cite_start]**UI Improvements:** Utilized a UI framework (e.g., Bootstrap or Material-UI) for a cleaner, user-friendly interface[cite: 34, 38].
* [cite_start]**Autocomplete:** Implemented an autocomplete feature for search suggestions based on title or author[cite: 18].

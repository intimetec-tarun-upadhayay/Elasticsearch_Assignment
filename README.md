# 📚 Book Search Application

A simple **Book Search Application** built with **Node.js**, **Elasticsearch**, and **React.js**. Users can search for books by title, author, or category with **fuzzy search, phonetic search, aggregations, autocomplete, and pagination**.  

---

## **Table of Contents**

- [Features](#features)  
- [Technologies](#technologies)  
- [Project Structure](#project-structure)  
- [Setup Instructions](#setup-instructions)  
  - [Backend](#backend)  
  - [Frontend](#frontend)  
- [Usage](#usage)  
- [Notes](#notes)  

---

## **Features**

- Search books by **title**, **author**, or **category**  
- **Fuzzy search** for typo tolerance  
- **Phonetic search** for better search matching  
- **Aggregations**: Group results by author and year of publication  
- **Autocomplete** suggestions for titles and authors  
- **Pagination** support for search results  
- Dynamic React frontend with **loading state**  

---

## **Technologies**

- **Backend**: Node.js, Express.js  
- **Search Engine**: Elasticsearch (local or Elastic Cloud)  
- **Frontend**: React.js, Material-UI  
- **API Requests**: Axios  
- **Other**: dotenv for environment variables  

---

## **Project Structure**

backend/
│ app.js
│ elastic.js
│ indexBooks.js
│ package.json
│ routes/
│ search.js
│ .gitignore
frontend/
│ src/
│ App.jsx
│ services/api.js
│ components/
│ SearchBar.jsx
│ BookList.jsx
│ Loader.jsx
│ package.json
README.md


---

## **Setup Instructions**

### **Backend**

1. **Clone the repo**  

```bash
git clone <repo-url>
cd backend```

2. **Install dependencies**
```npm install```

2. **Create a .env file**
```ELASTIC_CLOUD_ID=<your-cloud-id>
ELASTIC_USERNAME=<your-username>
ELASTIC_PASSWORD=<your-password>```

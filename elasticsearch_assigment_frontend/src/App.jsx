import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import Loader from "./components/Loader";
import { searchBooks } from "./services/api";

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query, category, author) => {
    setLoading(true);
    try {
      const data = await searchBooks(query, category, author);
      console.log("Search data:", data); // <-- check here
      setResults(data);
    } catch (error) {
      console.error("Search failed:", error);
    }
    setLoading(false);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom align="center">
        📚 Book Search App
      </Typography>
      <SearchBar onSearch={handleSearch} />
      {loading ? <Loader /> : <BookList results={results} />}
    </Container>
  );
}

export default App;

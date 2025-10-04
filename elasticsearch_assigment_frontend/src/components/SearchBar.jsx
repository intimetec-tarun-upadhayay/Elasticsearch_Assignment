import React, { useState } from "react";
import { TextField, Button, Box, MenuItem } from "@mui/material";

const categories = ["Fiction", "Non-Fiction", "Science", "History", "Technology"];

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query, category, author);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", gap: 2, mb: 3 }}>
      <TextField
        label="Search books..."
        variant="outlined"
        fullWidth
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <TextField
        select
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        sx={{ width: 200 }}
      >
        <MenuItem value="">All</MenuItem>
        {categories.map((cat) => (
          <MenuItem key={cat} value={cat}>{cat}</MenuItem>
        ))}
      </TextField>
      <TextField
        label="Author"
        variant="outlined"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        sx={{ width: 200 }}
      />
      <Button type="submit" variant="contained" color="primary">
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;

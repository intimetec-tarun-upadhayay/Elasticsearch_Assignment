import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const BookList = ({ results }) => {
  if (results.length === 0) {
    return <Typography variant="body1" color="text.secondary">No results found.</Typography>;
  }

  return (
    <Grid container spacing={2}>
      {results.map((book, index) => (
        <Grid item xs={12} md={6} lg={4} key={index}>
          <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>{book.title}</Typography>
              <Typography variant="body1">Author: {book.author}</Typography>
              <Typography variant="body2" color="text.secondary">
                Category: {book.category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Published: {book.published_date}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BookList;

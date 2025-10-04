const express = require("express");
const router = express.Router();
const client = require("../elastic");

router.post("/search", async (req, res) => {
  const { query, category, author } = req.body;

  try {
    const result = await client.search({
      index: "books",
      body: {
        query: {
          bool: {
            must: [
              {
                multi_match: {
                  query: query || "",
                  fields: ["title", "author"],
                  fuzziness: "AUTO" 
                }
              }
            ],
            filter: [
              ...(category ? [{ term: { category } }] : []),
              ...(author ? [{ match: { author } }] : [])
            ]
          }
        },
        aggs: {
          by_author: { terms: { field: "author.keyword" } },
          by_year: { date_histogram: { field: "published_date", calendar_interval: "year" } }
        }
      }
    });

    const books = result.hits.hits.map((hit) => hit._source);

    res.json(books);
  } catch (error) {
    console.error("Search error:", error.meta ? error.meta.body : error);
    res.status(500).json({ error: "Search failed" });
  }
});

module.exports = router;

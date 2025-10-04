const client = require("./elastic");

const authors = [
  "J.K. Rowling",
  "George Orwell",
  "Harper Lee",
  "J.R.R. Tolkien",
  "Mark Twain",
  "Jane Austen",
  "Ernest Hemingway",
  "Agatha Christie",
  "Leo Tolstoy",
  "Charles Dickens",
  "F. Scott Fitzgerald",
  "Suzanne Collins",
  "Dan Brown",
  "Paulo Coelho",
  "Stephen King",
  "C.S. Lewis",
  "H.G. Wells",
  "Arthur Conan Doyle",
  "J.D. Salinger",
  "Virginia Woolf",
];

const categories = ["Fiction", "Fantasy", "Dystopian", "Mystery", "Classic", "Adventure", "Romance", "Historical", "Thriller"];

const bookTitles = [
  "Harry Potter and the Sorcerer's Stone",
  "Harry Potter and the Chamber of Secrets",
  "The Hobbit",
  "1984",
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "Catching Fire",
  "The Da Vinci Code",
  "The Alchemist",
  "The Shining",
  "The Lion, the Witch and the Wardrobe",
  "Pride and Prejudice",
  "The Adventures of Tom Sawyer",
  "A Tale of Two Cities",
  "The Old Man and the Sea",
  "Brave New World",
  "Murder on the Orient Express",
  "The Catcher in the Rye",
  "Animal Farm",
  "Mrs Dalloway",
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateBooks(count = 100) {
  const books = [];
  for (let i = 0; i < count; i++) {
    const author = authors[getRandomInt(0, authors.length - 1)];
    const category = categories[getRandomInt(0, categories.length - 1)];
    const title = bookTitles[getRandomInt(0, bookTitles.length - 1)] + ` (${i + 1})`; // add index to make unique
    const year = getRandomInt(1950, 2023);
    const month = getRandomInt(1, 12).toString().padStart(2, "0");
    const day = getRandomInt(1, 28).toString().padStart(2, "0");

    books.push({
      title,
      author,
      category,
      published_date: `${year}-${month}-${day}`,
    });
  }
  return books;
}

async function setupIndex() {
  const indexExists = await client.indices.exists({ index: "books" });
  if (!indexExists) {
    await client.indices.create({
      index: "books",
      body: {
        mappings: {
          properties: {
            title: { type: "text" },
            author: { type: "text" },
            category: { type: "keyword" },
            published_date: { type: "date" },
          },
        },
      },
    });
    console.log("Books index created");
  }

  const books = generateBooks(100);

  const body = books.flatMap(doc => [{ index: { _index: "books" } }, doc]);
  await client.bulk({ refresh: true, body });

  console.log(`${books.length} books inserted`);
}

setupIndex();

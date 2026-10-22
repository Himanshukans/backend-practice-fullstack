import express from "express";

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.static("dist")); // Serve static files from the 'dist' <directory></directory>

// app.get("/", (req, res) => {
//   res.send("<h1>Server is ready to serve the request</h1>");
// });

// Endpoint to get jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "First Joke",
      content:
        "Why don't scientists trust atoms? Because they make up everything!",
    },
    {
      id: 2,
      title: "Second Joke",
      content:
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
    {
      id: 3,
      title: "Third Joke",
      content: "Why did the bicycle fall over? Because it was two-tired!",
    },
    {
      id: 4,
      title: "Fourth Joke",
      content:
        "Why did the tomato turn red? Because it saw the salad dressing!",
    },
    {
      id: 5,
      title: "Fifth Joke",
      content:
        "Why did the math book look sad? Because it had too many problems!",
    },
  ];
  res.send(jokes);
});

app.listen(port || 3000, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

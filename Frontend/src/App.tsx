import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const title: string = "Welcome to the App";

function App() {
  interface Joke {
    id: number;
    title: string;
    content: string;
  }
  const [jokes, setJokes] = useState<Joke[]>([]);

  useEffect(() => {
    axios
      .get<Joke[]>("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }); // there is no need to add dependency array here.

  return (
    <>
      <h1>{title}</h1>
      <p>JOKES: {jokes.length}</p>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
      {/* here we use () instead of {} because we want to return JSX directly without using return statement.*/}
    </>
  );
}

export default App;

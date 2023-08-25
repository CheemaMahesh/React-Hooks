import "./styles.css";

export default function App() {
  const url = "https://api.chucknorris.io/jokes/random?category=dev";
  // Use the custom hook here

  // Display loading text here

  // Display something went wrong here

  return (
    <div className="App">
      <h1>Joke Generator</h1>
      {/* <h2>{data.value}</h2> */}
      <button className="btn">New Joke</button>
    </div>
  );
}

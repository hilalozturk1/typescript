import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card name="John" age="32" />
      <Card name="John" />
    </div>
  );
}

export default App;

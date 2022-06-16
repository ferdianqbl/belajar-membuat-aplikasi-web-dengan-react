import "./App.css";
import containerJsx from "./jsx";
import { container } from "./reactElement";

function App() {
  return (
    <div className="App">
      {container}
      {containerJsx}
    </div>
  );
}

export default App;

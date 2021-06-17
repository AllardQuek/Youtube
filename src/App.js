import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>npm-check</title>
        <meta
          name="description"
          content="How to remove unused dependencies in React"
        />
      </Helmet>
    </div>
  );
}

export default App;

import "./App.css";
import { Helmet } from "react-helmet";
import Uploader from "./components/Uploader";

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
      <Uploader />
    </div>
  );
}

export default App;

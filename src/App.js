import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Upload to Amazon S3</title>
        <meta
          name="description"
          content="How to upload files to S3 from your React application"
        />
      </Helmet>
    </div>
  );
}

export default App;

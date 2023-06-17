import { useEffect } from "react";
import "./App.css";
import { fetchDataFromApi } from "./utils/apiUtils";

function App() {
  useEffect(() => {
    testApi("/movie/latest");
  }, []);

  const testApi = (url) => {
    fetchDataFromApi(url).then((res) => console.log(res.original_title));
  };

  return <>MovieBox</>;
}

export default App;

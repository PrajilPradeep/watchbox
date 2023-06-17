import { useEffect } from "react";
import "./App.scss";
import { fetchDataFromApi } from "./utils/apiUtils";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Details from "./pages/details/Details";
import Explore from "./pages/explore/Explore";
import Home from "./pages/home/Home";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import SearchResult from "./pages/searchResult/SearchResult";

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

import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Article from "./pages/Article";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:author/:slug" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
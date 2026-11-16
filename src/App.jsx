import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Article1 from './pages/Article1';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article-1" element={<Article1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

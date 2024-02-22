import "./assets/css/style.css"
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviePage from "./Pages/MoviePage";
function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MovieDetails/:id" element={<MoviePage />} />
      </Routes>
    </Router>
    </>
    )
}

export default App;

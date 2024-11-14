import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/home";
import Surah from "./pages/surah";
import { SearchProvider } from "./contexts/searchContext";

function App() {
  return (
    <SearchProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:surah" element={<Surah />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </SearchProvider>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import './App.css';
import Add from "./components/Add";
import Header from './components/Header';
import Watched from "./components/Watched";
import Watchlist from "./components/Watchlist";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Watchlist />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;

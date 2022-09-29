import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import ScrollToTop from "./utils/ScrollToTop"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
        </BrowserRouter>  
    </div>
  );
}

export default App;

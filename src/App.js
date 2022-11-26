import React from 'react';
import { AppProvider } from '../src/Context/Context'
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Dashboard,LandingPage,Login,PlaceDetailPage,SignUp} from './pages/index';
import ScrollToTop from "./utils/ScrollToTop"
function App() {
  return (
    <div className="App">
    <AppProvider>
      <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/places/:id" element={<PlaceDetailPage />} />
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </BrowserRouter> 
        </AppProvider> 
    </div>
  );
}

export default App;

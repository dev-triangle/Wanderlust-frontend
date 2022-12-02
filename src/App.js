import React,{ Suspense } from 'react';
import { AppProvider } from '../src/Context/Context'
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Dashboard,LandingPage,Login,PlaceDetailPage,SignUp,ReviewPage,Teams} from './pages/index';
import ScrollToTop from "./utils/ScrollToTop"
import Loader from './components/Loader/Loader';

function App() {
  return (
    <div className="App">
    <AppProvider>
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/places/:id" element={<PlaceDetailPage />} />
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/reviews" element={<ReviewPage/>}/>
            <Route path="/team" element={<Teams/>}/>
          </Routes>
        </BrowserRouter> 
        </Suspense>
        </AppProvider> 
    </div>
  );
}

export default App;

// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { useState } from "react";
import SearchBar from "./components/NavBar/SearchBar";





function App() {
  const [searchItems, setSearchItems] = useState ('')

  function getSearchItems(newItem){
    setSearchItems(newItem)
  //  console.log(searchItems)
}
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage searchItem = {searchItems}/>
              <SearchBar search ={getSearchItems}/>
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

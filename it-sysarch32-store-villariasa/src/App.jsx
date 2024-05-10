import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <ToastContainer /> {/* Add ToastContainer here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* New route for HomeDetails */}
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default App;

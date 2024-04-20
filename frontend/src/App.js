import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import LoginForm from "./components/login";
import ReviewList from "./components/reviewList";
import ProtectedRoute from "./components/protectedRoute";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Route for login */}
          <Route path="/login" element={<LoginForm />} />


          <Route
            exact
            path="/reviewList"
            element={<ProtectedRoute Component={ReviewList} />}
          />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
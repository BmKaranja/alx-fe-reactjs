// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider, useAuth } from "./hooks/useAuth";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <AuthProvider>
      <Router>
        <nav>
          <Link to="/">Home</Link> | <Link to="/profile">Profile</Link> |{" "}
          <Link to="/blog/1">Blog Post #1</Link>
        </nav>

        <button onClick={isAuthenticated ? logout : login}>
          {isAuthenticated ? "Logout" : "Login"}
        </button>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

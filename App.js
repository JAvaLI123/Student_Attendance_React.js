import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import DropdownSelect from './DropdownSelect';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="w-screen h-screen bg-richblack-900 flex flex-col">
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

            {/* Render DropdownSelect only if user is logged in */}
            {isLoggedIn && (
                <div className="mt-4">
                    <h1 className="text-2xl font-bold mb-4">.</h1>
                    <DropdownSelect />
                </div>
            )}
            
            <Routes>
                <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/dashboard" element={
                    <PrivateRoute isLoggedIn={isLoggedIn}>
                        <Dashboard />
                    </PrivateRoute>
                } />
            </Routes>
        </div>
    );
}

export default App;

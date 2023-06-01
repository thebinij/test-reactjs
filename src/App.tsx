import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import Landing from "./components/Landing";
import { useEffect, useState } from "react";
import {User} from './utils/types';
import Profile from "./pages/Profile";

function App() {
  const [user, setUser] =useState<User | undefined>();

  useEffect(() => {
    // Check whether user credential already
    const credentials = localStorage.getItem("userCredentials");
    if (credentials) {
      const parsedCredentials = JSON.parse(credentials);

      // Automatic Logout if token is expired
      if(new Date(parsedCredentials.token_key_expires_on) < new Date()){
        console.log('token expired!')
        localStorage.removeItem("userCredentials")
        setUser(undefined)
      }
      else{
      // Set Logged in User
      setUser(parsedCredentials);
      }
    }
  },[]);
  return (
    <>
      <NavBar user={user} />
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard user={user} />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/login" element={<Login user={user} />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;

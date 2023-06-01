import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import Landing from "./components/Landing";
import { useEffect, useState } from "react";
import { User } from "./utils/types";
import Profile from "./pages/Profile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/PrivateRoutes";

function App() {
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    // Check whether user credential already
    const credentials = localStorage.getItem("userCredentials");
    if (credentials) {
      const parsedCredentials = JSON.parse(credentials);

      // Automatic Logout if token is expired
      if (new Date(parsedCredentials.token_key_expires_on) < new Date()) {
        console.log("token expired!");
        toast("token expired!");
        localStorage.removeItem("userCredentials");
        setUser(undefined);
      } else {
        // Set Logged in User
        setUser(parsedCredentials);
      }
    }
  }, []);

  return (
    <>
      <NavBar user={user} />
      <ToastContainer />
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user}>
              <Dashboard user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute user={user}>
              <Profile user={user} setUser={setUser} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Home from "./Pages/home/home/Home";
import Login from "./Pages/login/login/Login";
import Register from "./Pages/login/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;

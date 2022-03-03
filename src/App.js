import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import AddService from "./Pages/AddService/AddService";
import Booking from "./Pages/home/booking/Booking";
import Home from "./Pages/home/home/Home";
import Order from "./Pages/home/Order/Order";
import Login from "./Pages/login/login/Login";
import PrivateRoute from "./Pages/login/PrivateRoute/PrivateRoute";
import Register from "./Pages/login/Register/Register";
import ManageAllOrder from "./Pages/ManageAllOrder/ManageAllOrder";
import MyOrder from "./Pages/MyOrder/MyOrder";
import Footer from "./Pages/Shared/footer/Footer";
import Navigation from "./Pages/Shared/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="/booking/:serviceId"
            element={
              <PrivateRoute>
                <Booking />
              </PrivateRoute>
            }
          />
          <Route path="addService" element={<AddService />} />
          <Route path="myOrder" element={<MyOrder />} />
          <Route path="manageAllOrder" element={<ManageAllOrder />} />
          <Route path="order" element={<Order />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;

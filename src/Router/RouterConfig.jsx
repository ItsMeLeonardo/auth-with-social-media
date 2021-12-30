import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import App from "../App";
import MyAccount from "../pages/MyAccount";
import EditAccount from "../pages/EditAccount";

function RouterConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<MyAccount />} />
        <Route path="profile/edit" element={<EditAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterConfig;

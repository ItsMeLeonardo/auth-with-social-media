import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import App from "../App";
import MyAccount from "../pages/MyAccount";
import EditAccount from "../pages/EditAccount";
import Home from "../pages/Home";
import { AuthProvider } from "../Context/AuthContext";
import NotFound from "../pages/NotFound";
import AuthSocialMedia from "../pages/AuthSocialMedia";

function RouterConfig() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="profile/:userId" element={<MyAccount />} />
            <Route path="profile/edit" element={<EditAccount />} />
          </Route>
          <Route path="/auth/social_media" element={<AuthSocialMedia />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default RouterConfig;

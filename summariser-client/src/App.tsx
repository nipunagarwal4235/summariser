import { Routes, Route } from "react-router";
import Home from "./pages/home";
import Login from "./pages/auth/login";
import EmailVerify from "./pages/auth/email-verify";
import ResetPassword from "./pages/auth/reset-password";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/email-verify" element={<EmailVerify />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

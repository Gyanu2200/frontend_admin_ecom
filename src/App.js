import { ToastContainer } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import { LoginPage } from "./pages/login/LoginPage";
// import { LoginPage } from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import EmailVerify from "./pages/verify/EmailVerify";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* public routes */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/verify" element={<EmailVerify />} />

          {/* private routes */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;

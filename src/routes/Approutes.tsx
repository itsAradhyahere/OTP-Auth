import { HashRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login'; // This should remain as a default import
import VerifyOTP from '../pages/VerifyOTP';
import ResendOTP from '../pages/ResendOTP';
import Dashboard from '../pages/Dashboard';

const AppRoutes = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/verify" element={<VerifyOTP />} />
      <Route path="/resend" element={<ResendOTP />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </HashRouter>
);

export default AppRoutes;
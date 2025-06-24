import { Routes, Route } from 'react-router-dom';
import { RegisterFlowPage } from './features/auth/pages/RegisterFlowPage';
import HomePage from './features/home/pages/HomePage';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterFlowPage />} />
    </Routes>
  );
}

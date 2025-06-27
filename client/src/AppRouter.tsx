import { Routes, Route } from 'react-router-dom';
import { RegisterFlowPage } from './features/auth/pages/RegisterFlowPage';
import HomePage from './features/home/pages/HomePage';
import MainLayout from './features/shared/layouts/Mainlayouts';

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      
      <Route path="/register" element={<RegisterFlowPage />} />
    </Routes>
  );
}

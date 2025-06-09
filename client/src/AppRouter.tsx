import { Routes, Route } from 'react-router-dom';
import { RegisterFlowPage } from './features/auth/pages/RegisterFlowPage';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterFlowPage />} />
    </Routes>
  );
}

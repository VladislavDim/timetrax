import { Routes, Route } from 'react-router-dom';
import RegisterPage from './modules/auth/pages/RegisterPage';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* TODO: Header */}
      <main className="flex-1">
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
      {/* TODO: Footer */}
    </div>
  );
}

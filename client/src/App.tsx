import AppRouter from './AppRouter';
import Navbar from './features/shared/components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* TODO: Header */}
      <main className="flex-1">
        {/* Navbar */}
        <Navbar />
        {/* Main content */}
        <AppRouter />
      </main>
      {/* TODO: Footer */}
    </div>
  );
}

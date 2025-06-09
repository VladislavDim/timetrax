import AppRouter from './AppRouter';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* TODO: Header */}
      <main className="flex-1">
        <AppRouter />
      </main>
      {/* TODO: Footer */}
    </div>
  );
}

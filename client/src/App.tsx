import AppRouter from './AppRouter';
import { SearchProvider } from './features/shared/ contexts/SearchContext';

export default function App() {
  return (
    <SearchProvider>
      <AppRouter />
    </SearchProvider>
  );
}

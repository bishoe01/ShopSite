import './App.scss';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { AuthContextProvider } from './components/context/AuthContext';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <Header />
          <Outlet />
        </AuthContextProvider>
      </QueryClientProvider>
    </div>
  );
}
export default App;

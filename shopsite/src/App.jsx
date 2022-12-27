import logo from './logo.svg';
import './App.scss';
import { Route, Routes, Outlet } from 'react-router-dom';
import Header from './components/Header';
import { AuthContextProvider } from './components/context/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <Header/>
      <Outlet/>
      </AuthContextProvider>
    </div>
  );
}
export default App;

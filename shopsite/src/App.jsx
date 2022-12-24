import logo from './logo.svg';
import './App.scss';
import { Route, Routes, Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
    </div>
  );
}
export default App;

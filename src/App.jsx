import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateSnippet from './pages/CreateSnippet.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
   </Routes>
  );
}

export default App;

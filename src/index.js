import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CreateSnippet from './pages/CreateSnippet.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import SearchSnippets from './pages/SearchSnippets.jsx';

ReactDOM.render(

  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <App /> }/>
      <Route path='/' element={<Home />}/>
      <Route path='/createsnippet' element={<CreateSnippet />}/>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />}/>
      <Route path='searchsnippets' element={<SearchSnippets />} />
    </Routes>
  </BrowserRouter>
</React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

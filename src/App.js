// import logo from './logo.svg';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import SignInSide from './pages/Login';
import AdoptAnimalsPage from './pages/AdoptAnimals';
import PostAnimalsPage from './pages/PostAnimals';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* /home check if login (/ = index) -> not -> login */}
          <Route path="/login" element={<SignInSide />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/home/adoptanimals" element={<AdoptAnimalsPage />} />
          <Route path="/home/postanimals" element={<PostAnimalsPage />} />
        </Routes>
      </BrowserRouter>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

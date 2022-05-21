import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import SignInSide from './pages/Login';
import AdoptAnimalsPage from './pages/AdoptAnimals';
import PostAnimalsPage from './pages/PostAnimals';
import CEOPage from './pages/CEO';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to ="/login"/>} />
          <Route path="/login" element={<SignInSide />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/home/ceo" element={<CEOPage />} />
          <Route path="/home/adoptanimals" element={<AdoptAnimalsPage />} />
          <Route path="/home/postanimals" element={<PostAnimalsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

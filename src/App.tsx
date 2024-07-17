import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomeChat from './pages/HomeChat';
import './tailwind.css';
import LandingPage from './pages/landingpage';
import Login from './pages/login';
import SignUp from './pages/signup';


function App() {
  return (
    <div className="w-full h-full"> {/* Adjust padding as per Tailwind CSS predefined classes or define custom in tailwind config */}
      <Container fluid className="p-0">
        <Routes>
          <Route path="/HomeChat" element={<HomeChat />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Telegram     from './pages/Telegram';
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/telegram" element={<Telegram />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

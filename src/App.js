import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Root, Landing, Home, RequireAuth } from './component/index.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Root />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/home' element={<RequireAuth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

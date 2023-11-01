import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Root, Landing, SignUp, SignIn, Home } from './component/index.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Root />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

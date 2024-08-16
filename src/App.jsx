import Home from './page/Home';
import Signup from './page/signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registre from './register/registre';
import Password from './register/password';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/:username" element={<Home />} />
          <Route path='/login' element={<Signup />} />
          <Route path='/signup' element={<Registre />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

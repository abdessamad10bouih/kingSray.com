import Home from './page/Home';
import Search from './components/searchBar';
import Signup from './page/signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </Router>
    </>
  )
}

export default App

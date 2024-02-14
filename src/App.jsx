import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/home.jsx'
import About from './Pages/about.jsx'
import ContactUs from './Pages/contactUs.jsx'

function App() {

  return (
    <>
      <Router>
        <Routes>

          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs  />} />
          
        </Routes>
      </Router>
    </>
  )
}

export default App

import './App.css';
import './Pages/login.css';
import './Pages/reg.css';
import {BrowserRouter as Router, Routes, Route }from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dash from './Pages/Dash';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'element={<Home/> } />
          <Route path='/Login'element={<Login/>}/>
          <Route path='/Register'element={<Register/>}/>
          <Route path='/Login/Dash' element={< Dash/>}/>
        </Routes>
      </Router>  
    </div>
    );
}

export default App;

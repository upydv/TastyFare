
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router,Routes,Route }from'react-router-dom'
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={ <Home/>}/>
          <Route exact path='/createuser' element={ <Signup/>}/>
          <Route exact path='/login' element={ <Login/>}/>
        </Routes>
      </div>
    </Router>
    
       
    

  );
}

export default App;


import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import LiveScreen from './pages/live_screen/livescreen.tsx';
// import Signup from './pages/Auth/Signup/SignUp.tsx';
// import HomeScreen from './pages/home/HomeScreen.tsx';
import { Login,Singup ,Home,ResetPassword, NoContentChannel} from './pages/index.js';


function App() {
  return (
 <Router>
  <Routes>
    <Route path='/livescreen' Component={LiveScreen} />
    <Route path='/Signup' Component={Singup} />
    <Route path='/Login' Component={Login} />
    <Route path='/Reset' Component={ResetPassword} />
    <Route path='/' Component={Home} />
    <Route  path='nonContent/'Component={NoContentChannel}/>

  </Routes>
 </Router>
  );
}

export default App;

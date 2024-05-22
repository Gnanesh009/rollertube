import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import LiveScreen from './pages/live_screen/livescreen.tsx';

function App() {
  return (
 <Router>
  <Routes>
    <Route path='/livescreen' Component={LiveScreen} />

  </Routes>
 </Router>
  );
}

export default App;

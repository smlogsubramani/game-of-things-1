
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Landpage from './Landpage';

function App() {
  return (
    // <Router>
    // <div className='app'>
    //   <Route path="/" exact={true} component={Login} /> 
    //   <Route path="/signup" component={Signup}/>
      
    // </div>
    // </Router>
    <div className='app'>
      <Landpage/>
    </div>
  );
}

export default App;

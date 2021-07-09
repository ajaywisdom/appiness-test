import logo from './logo.svg';
import './App.css';
import Login from './component/Auth/Login.auth';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './component/Dashboard';
function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/dashboard" component={Dashboard}/>
      </Switch>
    </Router>
    </>
  )
}

export default App;

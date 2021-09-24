import LandingPage from './LandingPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterMain from './Register';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path='/login'>
          <RegisterMain type={true} />
        </Route>
        <Route exact path='/signup'>
          <RegisterMain type={false} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

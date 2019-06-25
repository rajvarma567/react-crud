import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import Home from './Home';
import students from './Students';
import CreateStudent from './CreateStudent';
import StudentsList from './StudentsList';
import './App.css';

function App() {
  return (
    <Router>
        <div>
          <div className="nav card">
          <ul>
            <li><NavLink  exact to="/" > Home </NavLink></li>
            <li><NavLink  exact to="/CreateStudent" >Add Student</NavLink></li>
            <li><NavLink  exact to="/StudentsList">StudentsList</NavLink></li>
          </ul>
          </div>
          <hr />
          <Switch>
              <Route  exact strict  path="/" component={Home} />
              <Route  exact strict path="/CreateStudent" component={CreateStudent} />
              <Route  exact strict path="/StudentsList" component={StudentsList} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;

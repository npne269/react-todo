import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import TodoList from './components/TodoList';
import EditTodo from './components/EditTodo';
import CreateTodo from './components/CreateTodo';
import logo from './images/logo.png';
function App() {
  return (
    <div className="app container">
      <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            <Link to="/" className="navbar-brand">Todo App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
      
        <Switch>
        <Route path="/edit/:id"><EditTodo /></Route>
        <Route path="/create"><CreateTodo /></Route>
        <Route path="/"><TodoList /></Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

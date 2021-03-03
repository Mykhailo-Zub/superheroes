import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import ShowAll from "./components/showAll/ShowAll.jsx";
import Navbar from "./components/navbar/Navbar";
import AddNew from "./components/AddNew/AddNew";
import About from "./components/about/About";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/showall" component={ShowAll} />
          <Route path="/addnew" component={AddNew} />
          <Route path="/about" component={About} />
          <Route path="" exact render={() => <Redirect to="/showall" />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

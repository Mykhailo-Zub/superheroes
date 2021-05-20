import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import ShowAll from "./components/showAll/ShowAll";
import Navbar from "./components/navbar/Navbar.jsx";
import AddNew from "./components/AddNew/AddNew";
import About from "./components/about/About.jsx";
import ChangeInfo from "./components/ChangeInfo/ChangeInfo";
import ChangeSuccess from "./components/changeSuccess/ChangeSuccess";
import RemoveSuccess from "./components/removeSuccess/RemoveSuccess";
import AddSuccess from "./components/addSuccess/AddSuccess";

function App() {
  return (
    <Router>
      <div className="main_wrapper">
        <div className="container">
          <Navbar />
          <Switch>
            <Route path="/showall" component={ShowAll} />
            <Route path="/addnew" component={AddNew} />
            <Route path="/addsuccess" component={AddSuccess} />
            <Route path="/about" component={About} />
            <Route path="/changeinfo" component={ChangeInfo} />
            <Route path="/changesuccess" component={ChangeSuccess} />
            <Route path="/removesuccess" component={RemoveSuccess} />
            <Route path="" exact render={() => <Redirect to="/showall" />} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

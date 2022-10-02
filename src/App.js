import "./App.css";
import "./index.css";
import Content from "./components/Content";
import Header from "./components/Header";
import About from "./components/about";
import Contact from "./components/Contact";
import { Redirect, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Logout from "./components/Logout";
import PrivateRoute from "./PrivateRoute";
import Projects from "./Project";
import Topics from "./components/Topics";
import Proj from "./components/Proj";
import SidebarExample from "./components/sidebar";
function App() {
  return (
    <div>
      <Header />
      {/* {location === "/" && <Content />}
  {location === "/about" && <About />}*/}

      <Switch>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <PrivateRoute path="/dashbord">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/topics">
          <Topics />
        </PrivateRoute>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/menu" exact>
          <SidebarExample />
        </Route>
        <Route path="/logout" exact>
          <Redirect to="/login" />
        </Route>
        <PrivateRoute path="/projects/:id">
          <Proj />
        </PrivateRoute>
        <PrivateRoute path="/projects">
          <Projects />
        </PrivateRoute>

        <Route path="/" exact>
          <Content />
        </Route>
        <Route path="*">
          <h1>404 Not Found!</h1>
        </Route>
      </Switch>
    </div>
  );
}
export default App;

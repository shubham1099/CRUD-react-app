import AddUser from "./Components/AddUser";
import AllUsers from "./Components/AllUsers";
import Eclectic from "./Components/Eclectic";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./Components/NotFound";
import EditUser from "./Components/EditUser";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Eclectic} />
        <Route exact path="/add" component={AddUser} />
        <Route exact path="/all" component={AllUsers} />
        <Route exact path="/edit/:id" component={EditUser} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;

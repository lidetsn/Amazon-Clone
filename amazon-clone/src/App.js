import  React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"


function App() {
  return (
    <div>
        <Router>
          <Header/>
          <Switch>
            <Route path="/" component={Home}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;

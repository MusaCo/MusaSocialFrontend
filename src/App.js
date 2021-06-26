import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Messenger from "./pages/messenger/Messenger";
import Register from "./pages/register/Register";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from "axios";


function App() {
  // axios.defaults.withCredentials = true;

  const [User, setUser] = useState(null)

  useEffect(async () => {
    const userInfo = axios.get("https://musasocialapi.herokuapp.com/user/getuser")
    setUser(userInfo.data)
  }, [])

  const {user} = useContext(AuthContext)
  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/">
    //       {user? <Home/>: <Login/>}
    //     </Route>
    //     <Route path="/login">
    //       {user? <Redirect to="/"/> : <Login/>}
    //     </Route>
    //     <Route path="/register">
    //       {user? <Redirect to="/"/>: <Register/>}
    //     </Route>
    //     <Route path="/profile/:username">
    //       {user? <Profile/> : <Login/>}
    //     </Route>
    //     <Route exact path="/messenger">
    //       {!user? <Redirect to="/"/>: <Messenger/>}
    //     </Route>
    //   </Switch>
    // </Router>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/profile/:username">
         <Profile/>
        </Route>
        <Route exact path="/messenger">
          <Messenger/>
        </Route>
      </Switch>
    </Router>
    
  )
}

export default App;

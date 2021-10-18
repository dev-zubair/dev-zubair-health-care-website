import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home.js';
import Services from './Pages/Home/Services/Services.js';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage.js';
import Header from './Pages/Shared/Header/Header.js';
import AboutUs from './Pages/AboutUs/AboutUs.js';
import Login from './Pages/Login/Login.js';
import Footer from './Pages/Shared/Footer/Footer.js';
import SignUp from './Pages/Signup/Signup.js';


function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/services">
            <Services></Services>
          </Route>

          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/signup">
            <SignUp></SignUp>
          </Route>

          <Route path="*">
            <NotFoundPage></NotFoundPage>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

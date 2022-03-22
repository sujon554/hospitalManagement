
import { BrowserRouter, Switch,  Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Login from './Login/Login/Login';
import Register from './Login/Login/Register';
import PrivateRoute from './Login/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import About from './pages/Home/About/About';
import Care from './pages/Home/Care/Care';
import Contacts from './pages/Home/Contacts/Contacts';
import Details from './pages/Home/Details/Details';
import SingleDoctor from './pages/Home/Doctor/SingleDoctor';
import Doctors from './pages/Home/Doctors/Doctors';
import Home from './pages/Home/Home/Home';
import NotFound from './pages/Home/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        
        <Header></Header>

        <Switch>
          <Route exact path="/">
             <Home></Home>
          </Route>

          <Route path="/home">
             <Home></Home>
          </Route>

          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>

          <Route path="/care">
            <Care></Care>
          </Route>
          
            <Route path="/contacts">
              <Contacts></Contacts>
          </Route>

          <Route path="/about">
             <About></About>
          </Route>

          <Route path="/login">
            <Login></Login>
            </Route>
            <Route path="/register">
            <Register></Register>
            </Route>

            <Route path="/dashboard">
            <Dashboard />
            </Route>

            <PrivateRoute path= "/singledoctor/:id">
              <SingleDoctor/>
          </PrivateRoute>


          <PrivateRoute path= "/details/:serviceId">
              <Details></Details>
          </PrivateRoute>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>

        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

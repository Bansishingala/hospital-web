import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Container/Home/Home';
import { Route, Switch } from 'react-router-dom';
import Department from './Container/Department/Department';
import Doctors from './Container/Doctors/Doctors';
import About from './Container/About/About';
import Contact from './Container/Contact/Contact';
import Appointment from './Container/Appointment/Appointment';
import Lform from './Container/Login-Signin/Lform';
import Medicines from './Container/Medicins/Medicines';

function App() {
  return (
    <div>
      < Header />
      <Switch>
      <Route path={"/"} exact component={Home} />
      <Route path={"/Department"} exact component={Department} />
      <Route path={"/Doctors"} exact component={Doctors} />
      <Route path={"/About"} exact component={About} />
      <Route path={"/Contact"} exact component={Contact} />
      <Route path={"/Appointment"} exact component={Appointment} />
      <Route path={"/Lform"} exact component={Lform} />
      <Route path={"/Medicines"} exact component={Medicines} />
      
      {/* < Home /> */}
      </Switch>
      <Footer />
    </div>
  )
}

export default App;

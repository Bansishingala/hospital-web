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
import Appointment from './Container/Appointment/Book_apt';
import Lform from './Container/Login-Signin/Lform';
import Medicines from './Container/Medicins/Medicines';
import Ref from './Container/User_Ref/Ref';
import List_apt from './Container/Appointment/List_apt';
import Book_apt from './Container/Appointment/Book_apt';
import PublicRoute from './Route/PublicRoute';
import PrivetRoute from './Route/PrivetRoute';
import { ThemeProvider } from './Context/ThemeContext';
import { store } from './redux/Store';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';

function App() {

  return (
    <SnackbarProvider maxSnack={3}>
      <div>
        <Provider store={store}>
          <ThemeProvider>
            < Header />
            <Switch>
              <PublicRoute path={"/"} exact component={Home} />
              <PublicRoute path={"/De artment"} exact component={Department} />
              <PublicRoute path={"/Doctors"} exact component={Doctors} />
              <PublicRoute path={"/About"} exact component={About} />
              <PublicRoute path={"/Contact"} exact component={Contact} />
              <PrivetRoute path={"/Appointment"} exact component={Appointment} />
              <PublicRoute path={"/Lform"} exact resticted={true} component={Lform} />
              <PublicRoute path={"/Medicines"} exact component={Medicines} />
              <PrivetRoute path={"/Ref"} exact component={Ref} />
              <PrivetRoute path={"/Book-apt"} exact component={Book_apt} />
              <PrivetRoute path={"/List-apt"} exact component={List_apt} />

              {/* < Home /> */}
            </Switch>
            <Footer />
          </ThemeProvider>
        </Provider>
      </div>
    </SnackbarProvider>

  )
}
export default App;

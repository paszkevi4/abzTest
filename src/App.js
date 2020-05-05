import React from 'react';
import {Provider} from 'react-redux'
import store from "./Redux/store";
import './app.sass';
import Header from './components/header/hedaer'
import Reminder from './components/reminder/reminder'
import Acquainted from './components/gettingAcquainted/gettingAcquainted'
import CheerfulUsers from './components/cheerfulUsers/cherfulUsers'
import RegistrationPage from './components/registerForm/registrationPage'
import Footer from './components/footer/footer'

function AppInner() {
  return (
    <div className="App">
      <Header />
      <Reminder />
      <Acquainted />
      <CheerfulUsers />
      <RegistrationPage />
      <Footer />
    </div>
  );
}

const App = (props) => {
    return (
        <Provider store={store} >
            <AppInner />
        </Provider>
    )
}

export default App;

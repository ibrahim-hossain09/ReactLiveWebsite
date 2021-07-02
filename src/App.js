import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Component/Home';
import About from './Component/About';
import Service from './Component/Service';
import Contact from './Component/Contact';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;

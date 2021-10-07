import React from 'react';
import Navbar from '../src/components/navbar/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dicas from './components/pages/Dicas';
import Ranking from './components/pages/Ranking';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Passo from './components/pages/Passo';
import Cover from './components/cover/Cover';
import InfoTrilha from './components/infoTrilha/InfoTrilha';



//import Footer from './components/footer/Footer';
//import Slider from './components/slides/Slider';

function App() {
  return (
    
    <Router>
        
      <Router>
      
      </Router>
      <Cover/>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/dicas' component={Dicas} />
        <Route path='/ranking' component={Ranking} />
        <Route path='/contact-us' component={ContactUs} />
	      <Route path='/sign-up' component={SignUp} />
        <Route path='/passo' component={Passo} />
        <Route path='/infotrilha' component={InfoTrilha} />
      </Switch>
    
      
    </Router>
    
  );
}

export default App;

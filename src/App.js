import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dicas from './components/pages/Dicas';
import Ranking from './components/pages/Ranking';
import SignUp from './components/pages/SignUp';
import Passo from './components/pages/Passo';
import Cover from './components/cover/Cover';
import InfoTrilha from './components/infoTrilha/InfoTrilha';
import Dashboard from './components/pages/Dashboard';
import Footer from './components/footer/Footer';

function App() {

  return (
    
    <Router>
      <Cover/>
      
      <Router>
        <Route path='/dash' component={Dashboard} />
      </Router>
      <Router>
       
      </Router>
      
      
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/dicas' component={Dicas} />
        <Route path='/ranking' component={Ranking} />
	      <Route path='/sign-up' component={SignUp} />
        <Route path='/passo' component={Passo} />
        <Route path='/infotrilha' component={InfoTrilha} />
      </Switch>

      <Footer/> 
    </Router>
    
  );
}

export default App;

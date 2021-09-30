import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dicastrilhas from './components/pages/Dicastrilhas';
import Ranking from './components/pages/Ranking';
/* import ContactUs from './components/pages/ContactUs'; */
import SignUp from './components/pages/SignUp';
/* import Test from './components/pages/Test'; */
/* import Natura from './components/pages/Natura'; */
import TrilhaInformation from './components/pages/TrilhaInformation';





function App() {
  return (
    <div>
    <Router>
    
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/trilhainformation' exact component={TrilhaInformation} />
        <Route path='/dicastrilhas' component={Dicastrilhas} />
        <Route path='/ranking' component={Ranking} />
        {/* <Route path='/contact-us' component={ContactUs} /> */}
		    <Route path='/sign-up' component={SignUp} />
      {/*   <Route path='/test' component={Test} /> */}
        {/* <Route path='/natura' component={Natura} /> */}
        
      </Switch>
    </Router>


   </div> 
  );
}

export default App;

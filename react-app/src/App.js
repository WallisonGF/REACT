import React, { Component }     from 'react';
import Exercicio1               from './Components/exercicios-1/exercicio1/Exercicio1.jsx';
import Exercicio2               from './Components/exercicios-1/exercicio2/Exercicio2.jsx';
import Exercicio3               from './Components/exercicios-1/exercicio3/Exercicio3.jsx';
import Exercicio4               from './Components/exercicios-1/exercicio4/Exercicio4.jsx';
import Exercicio5               from './Components/exercicios-1/exercicio5/Exercicio5.jsx';
import Home                     from './pages/Home/Home.jsx';
import Navbar                   from './Components/Navbar';
import { 
  BrowserRouter as Router,
  Route, 
  Switch}                       from 'react-router-dom';
import { GlobalStyle }          from './Components/GlobalStyle';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/exercicio1' component={Exercicio1} />
            <Route path='/exercicio2' component={Exercicio2} />
            <Route path='/exercicio3' component={Exercicio3} />
            <Route path='/exercicio4' component={Exercicio4} />
            <Route path='/exercicio5' component={Exercicio5} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;

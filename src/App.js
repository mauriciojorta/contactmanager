import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  // render() {
  //   const name = 'Mauricio';
  //   const showHello = true;
  //   const showMath = true;
  //   const num1 = 40;
  //   const num2 = 23;

  //   let math;
  //   if (showMath) {
  //     math = (
  //       <h4>
  //         {' '}
  //         {num1} + {num2} = {num1 + num2}
  //       </h4>
  //     );
  //   } else {
  //     math = null;
  //   }

  //   return (
  //     <div className="App">
  //       <h1>The App Component</h1>
  //       {showHello ? <h4>Hello, my name is {name.toUpperCase()}</h4> : null}
  //       {math}
  //     </div>
  //   );
  // }
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

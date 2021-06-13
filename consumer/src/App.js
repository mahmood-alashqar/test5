import React from 'react';
// import Header from './components/Header';
import Main from './components/Main';
import Marvel from './components/Marvel';
import { BrowserRouter, Route, Switch } from "react-router-dom";


class App extends React.Component {
  render() {
    return (
      <>
        {/* <Header /> */}
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route exact path='/favorite'>
              <Marvel />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}

export default App;

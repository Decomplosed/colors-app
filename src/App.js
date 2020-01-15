import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Palette from './Palette'
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'

class App extends Component {

  findPalette(id) {
    seedColors.find(palette => palette.id === id)
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => <h1>PALETTE LIST GOES HERE</h1>} />
        <Route exact path='/palette/:id' render={(routeProps) => <Palette palette={this.findPalette(routeProps.match.params.id)} />} />
      </Switch>
      // <div className="App" >
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;

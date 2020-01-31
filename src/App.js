import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Palette from './Palette'
import PaletteList from './PaletteList'
import SingleColorPalette from './SingleColorPalette'
import seedColors from './seedColors'
import NewPaletteForm from './NewPaletteForm'
import { generatePalette } from './colorHelpers'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

class App extends Component {
  constructor(props) {
    super(props)
    const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'))
    this.state = { palettes: savedPalettes || seedColors }
    this.savePalette = this.savePalette.bind(this)
    this.findPalette = this.findPalette.bind(this)
    this.deletePalette = this.deletePalette.bind(this)
  }

  findPalette(id) {
    return this.state.palettes.find(palette => palette.id === id)
  }

  savePalette(newPalette) {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    )
  }

  deletePalette(id) {
    this.setState(
      st => ({
        palettes: st.palettes.filter(palette => palette.id !== id)
      }),
      this.syncLocalStorage
    )
  }

  syncLocalStorage() {
    window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes))
  }

  render() {
    return (
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={5000}>
              <Switch location={location}>
                <Route
                  exact
                  path="/palette/new"
                  render={routeProps => (

                      <NewPaletteForm
                        savePalette={this.savePalette}
                        palettes={this.state.palettes}
                        {...routeProps}
                      />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/"
                  render={routeProps => (
                    <div className="page">
                      <PaletteList
                        palettes={this.state.palettes}
                        deletePalette={this.deletePalette}
                        {...routeProps}
                      />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/palette/:id"
                  render={routeProps => (
                    <div className="page">
                      <Palette
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.id)
                        )}
                      />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/palette/:paletteId/:colorId"
                  render={routeProps => (
                    <div className="page">
                      <SingleColorPalette
                        colorId={routeProps.match.params.colorId}
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.paletteId)
                        )}
                      />
                    </div>
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />

      // <div className="App" >
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    )
  }
}

export default App

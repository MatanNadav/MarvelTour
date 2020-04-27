import React from 'react';
import './App.css';
import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import HomePage from "./pages/HomePage/HomePage"
import CharactersPage from "./pages/CharactersPage/CharactersPage"
import CharacterDetailsPage from "./pages/CharacterDetailsPage/CharacterDetailsPage"
import AppHeader from "./components/AppHeader/AppHeader"
import CharacterFilter from "./components/CharacterFilter/CharacterFilter"

function App() {
  return (
    <div className="App">
      <HashRouter>
          <AppHeader></AppHeader>
          <CharacterFilter></CharacterFilter>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/characters" component={CharactersPage}></Route>
          <Route path="/character/:id" render={({match})=>(
            <CharacterDetailsPage id={match.params.id}></CharacterDetailsPage>    
          )} />
          {/* <Route exact path="/about" component={CharactersPage}></Route> */}
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;

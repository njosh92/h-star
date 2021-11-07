import logo from './logo.svg';
import './App.css';
import Main from './components/main'
import Store from './components/store'
import Arcade from './components/arcade'
import Creategame from './components/Creategame'
import Edit from './components/edit'
import Spotify from './components/spotify'


import { Link, Switch, Route, Redirect, useHistory, useNavigate } from 'react-router-dom';

const { Leaves } = require('../src/leaves')

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/*', function(req,res) {
// 		res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

function App() {



  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Link to="/">Home</Link> |<a href="/beat-store"> Beats </a>|<a href="/game"> Games </a>|<a href="https://soundcloud.com/master-hoshi/popular-tracks"> SC </a>|<a href="https://youtu.be/orbvmaRr1t0" > Visuals </a>|<a href="/spotify"> Spotify</a>|<a href="https://sz-market.net"> SZM </a>
        </p>

      </header>

      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/game">
          <Arcade />
        </Route>
        <Route exact path="/game/new">
          {/* <Create /> */}
        </Route>

        <Route exact path="/game/:id">
          <Edit />
        </Route>


        <Route exact path="/beat-store">
          <Store />
        </Route>
        <Route exact path="/add/game">
          <Creategame />
        </Route>
        <Route exact path="/spotify">
          <Spotify />
        </Route>
        <Route exact path="/spotify">
          <Spotify />
        </Route>

      </Switch>
      {Leaves}
    </div>
  );
}

export default App;

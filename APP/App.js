import React from 'react';
import {Meme} from '../Meme/meme'
import {Switch,Route} from 'react-router-dom'
import { MemeGenerated } from '../MemeGenerated/memegenerated';

export const App = ()=> {
  return (
    <div className="App">
      <h1>Meme Creator</h1>
      <Switch>
        <Route exact path='/'>
          <Meme />
        </Route>
        <Route path='/generated'>
          <MemeGenerated />
        </Route>
      </Switch>
    </div>
  );
}



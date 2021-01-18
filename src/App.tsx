import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

export function App() {
  return (
    <Switch>
      <Route exact path="/" />
      <Route exact path="/login" />
      <Route exact path="/game" />
      <Route exact path="/game/play" />
      <Route exact path="/game/records" />
      <Route exact path="/not-found" />
      <Redirect to="/not-found" />
    </Switch>
  );
}

import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  LoginPage, MainPage, GamePage, RecordsPage,
} from './pages';
import { RootState, bootstrapStart } from './state';

const PublicRoute = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/game" />
    </Route>
    <Route exact path="/game" component={MainPage} />
    <Route exact path="/game/play" component={GamePage} />
    <Route exact path="/game/records" component={RecordsPage} />
    <Route exact path="/not-found" />
    <Redirect to="/not-found" />
  </Switch>
);

export function App() {
  const { bootstrapped, isAuth } = useSelector((state: RootState) => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bootstrapStart());
  }, [dispatch]);

  return bootstrapped
    ? (
      <>
        <Route
          render={() => {
            if (isAuth) {
              return <PublicRoute />;
            }
            return <Redirect to="/login" />;
          }}
        />
        <Route exact path="/login" component={LoginPage} />
      </>
    ) : null;
}

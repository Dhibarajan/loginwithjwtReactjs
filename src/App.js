import React from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom'
import Login from './auth/Login';
import ProtectedRoute from './auth/ProtectedRoute';
import Home from './auth/Home';


function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Switch>
        <Route exact path="/" component={Login} />
        <ProtectedRoute exact path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;

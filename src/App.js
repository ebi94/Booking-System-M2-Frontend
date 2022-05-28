import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Routes>
    </Router>
  );
}

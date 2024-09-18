import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import ProductList from './components/ProductList';
import Search from './components/Search';
import LoginForm from './components/LoginForm'; // Importing LoginForm

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/search" component={Search} />
        <Route path="/login" component={LoginForm} /> {/* Login route */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

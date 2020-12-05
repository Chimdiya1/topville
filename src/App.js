import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/home/home';
import FAQ from './pages/faq/faq';
import Terms from './pages/terms/terms';
import HowItWorks from './pages/how-it-works/how-it-works';
import About from './pages/about/about';
import Blog from './pages/blog/blog';
import Contact from './pages/contact/contact';
import Listings from './pages/listings/listings';
import ListingPage from './pages/listingPage/listingPage';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import './App.css';

import sampleData from './sampleData';
import { connect } from 'react-redux';
import {
  loadListings,
  loadSearchResult,
} from './redux/listings/listings.actions';

function App({ loadListings, loadSearchResult }) {
  useEffect(() => {
    loadListings(sampleData);
    loadSearchResult(sampleData);
  }, []);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/how-it-works" component={HowItWorks} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/listings" component={Listings} />
        <Route exact path="/listings/:id" component={ListingPage} />
        {/* <Route exact path="/how-it-works" component={HowItWorks} />
        <Route path="/listings" component={Listings} />
        <Route exact path="/login" component={AdminLogin} />
        <Route exact path="/indaboski" component={AdminPage} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/404" component={Page404} />
        <Redirect to="404" /> */}
      </Switch>
      <Footer />
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  loadListings: (listings) => dispatch(loadListings(listings)),
  loadSearchResult: (result) => dispatch(loadSearchResult(result)),
});

export default connect(null, mapDispatchToProps)(App);

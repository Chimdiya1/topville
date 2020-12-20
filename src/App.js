import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/home/home';
import FAQ from './pages/faq/faq';
import Terms from './pages/terms/terms';
import HowItWorks from './pages/how-it-works/how-it-works';
import About from './pages/about/about';
import Blog from './pages/blog/blog';
import Contact from './pages/contact/contact2';
import Listings from './pages/listings/listings';
import ListingPage from './pages/listingPage/listingPage';
import BlogPage from './pages/blogPage/blogPage';
import Page404 from './pages/404/404';
import AdminDashboard from './pages/adminDashboard/adminDashboard';
import EditListing from './pages/editListing/editListing';
import EditBlogPost from './pages/editBlogPost/editBlogPost';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import './App.css';

import sampleBlogData from './sampleBlogData';
import { connect } from 'react-redux';
import {
  loadListings,
  loadSearchResult,
} from './redux/listings/listings.actions';
import { loadBlogs } from './redux/blogs/blogs.actions';
import {
  firestore,
  convertCollectionSnapshotToMap,
  convertBlogSnapshotToMap,
} from './firebase';

function App({ loadListings, loadSearchResult, loadBlogs }) {
  useEffect(() => {
    const collectionRef = firestore.collection('listings');
    const blogsRef = firestore.collection('blogs');
    collectionRef.onSnapshot(async (snapshot) => {
      await loadListings(convertCollectionSnapshotToMap(snapshot));
      await loadSearchResult(convertCollectionSnapshotToMap(snapshot));
    });
    blogsRef.onSnapshot(async (snapshot) => {
      await loadBlogs(convertBlogSnapshotToMap(snapshot));
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/faq" component={FAQ} /> */}
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/how-it-works" component={HowItWorks} />
        {/* <Route exact path="/about" component={About} /> */}
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/:id" component={BlogPage} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/listings" component={Listings} />
        <Route exact path="/listings/:id" component={ListingPage} />
        <Route exact path="/admin" component={AdminDashboard} />
        <Route exact path="/edit/:id" component={EditListing} />
        <Route exact path="/editblog/:id" component={EditBlogPost} />
        <Route exact path="/404" component={Page404} />
        <Redirect to="404" />
      </Switch>
      <Footer />
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  loadListings: (listings) => dispatch(loadListings(listings)),
  loadSearchResult: (result) => dispatch(loadSearchResult(result)),
  loadBlogs: (blogs) => dispatch(loadBlogs(blogs)),
});

export default connect(null, mapDispatchToProps)(App);

import React, { Component, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import Alert from '../src/components/Alert';
const App = () => {
  const api = import.meta.env.VITE_APP_API; //Api key from News api
  const [progress, setProgress] = useState(0); //variable to show progress of top loading bar
  const [query, setquery] = useState(''); //variable to store the query of search field
  const [error, seterror] = useState(''); //error variable to store the error if occured
  const [Category, setCategory] = useState(''); //category  about which user wants to read news

  //usng react router to link different pages to different URL
  return (
    <div>
      <Router>
        <Navbar
          setquery={setquery}
          Category={Category}
          setCategory={setCategory}
        />
        <LoadingBar color='#f11946' progress={progress} height={3} />
        {error && <Alert message={error} />}
        {!error && (
          <Routes>
            <Route
              path='/'
              element={
                <News
                  api={api}
                  setProgress={setProgress}
                  query={query}
                  key='general' //key is used to re-render news component for each different category.
                  pagesize={50}
                  country='in'
                  category='general'
                  seterror={seterror}
                />
              }
            />
            <Route
              path='business'
              element={
                <News
                  api={api}
                  query={query}
                  setProgress={setProgress}
                  key='business'
                  pagesize={50}
                  country='in'
                  category='business'
                  seterror={seterror}
                />
              }
            />
            <Route
              path='sports'
              element={
                <News
                  api={api}
                  query={query}
                  setProgress={setProgress}
                  key='sports'
                  pagesize={50}
                  country='in'
                  category='sports'
                  seterror={seterror}
                />
              }
            />
            <Route
              path='entertainment'
              element={
                <News
                  api={api}
                  query={query}
                  setProgress={setProgress}
                  key='entertainment'
                  pagesize={50}
                  country='in'
                  category='entertainment'
                  seterror={seterror}
                />
              }
            />
            <Route
              path='health'
              element={
                <News
                  api={api}
                  query={query}
                  setProgress={setProgress}
                  key='health'
                  pagesize={50}
                  country='in'
                  category='health'
                  seterror={seterror}
                />
              }
            />
            <Route
              path='science'
              element={
                <News
                  api={api}
                  query={query}
                  setProgress={setProgress}
                  key='science'
                  pagesize={50}
                  country='in'
                  category='science'
                  seterror={seterror}
                />
              }
            />
            <Route
              path='technology'
              element={
                <News
                  api={api}
                  query={query}
                  setProgress={setProgress}
                  key='technology'
                  pagesize={50}
                  country='in'
                  category='technology'
                  seterror={seterror}
                />
              }
            />
          </Routes>
        )}
      </Router>
    </div>
  );
};
export default App;

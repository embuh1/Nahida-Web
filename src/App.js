import logo from './logo.svg';
import './App.css';


import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Product = lazy(() => import('./Product'));
const Features = lazy(() => import('./Features'));
const Navbar = lazy(() => import('./Navbar'));
const Signin = lazy(() => import('./Sign-In'));
const Setting = lazy(() => import('./setting'));
const Profile = lazy(() => import('./profile'));
const Manga = lazy(() => import('./Manga'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/Features' element={<Features />} />
          <Route path='/Navbar' element={<Navbar />} />
          <Route path='/Sign-In' element={<Signin />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/Manga' element={<Manga />} />
        </Routes>
      </Suspense>
    </Router>

  );
}

export default App;

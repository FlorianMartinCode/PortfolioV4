import React from 'react';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import './main.scss';

const HeaderFooter = () => (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderFooter />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
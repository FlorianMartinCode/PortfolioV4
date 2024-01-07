import React from 'react';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import './main.scss';
import { ThemeProvider } from './theme/theme'
import Contact from './pages/contact/contact'

const HeaderFooter = () => (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );

function Router() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderFooter />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default Router;
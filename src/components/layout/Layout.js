import React from 'react';
import Footer from './Footer';
import Header from './Header';
import '@fontsource/open-sans';
import '@fontsource/source-sans-pro';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

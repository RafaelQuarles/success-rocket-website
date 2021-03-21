import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../../assets/logo_horizontal.png';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow z-50">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="object-contain sm:max-w-xs mr-3">
          <img src={logo} alt="" />
        </div>
      </div>

      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#features">
          Features
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          About
        </AnchorLink>
        <AnchorLink className="px-4" href="#blog">
          Blog
        </AnchorLink>
        <AnchorLink className="px-4" href="#contact">
          Contact
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">Login</Button>
      </div>
    </div>
  </header>
);

export default Header;

import React from 'react';
import logo from '../../assets/icon.png';

const Footer = () => (
  <footer class="footer bg-white relative pt-1 border-b-2 border-blue-700">
    <div class="container mx-auto px-6">
      <div class="sm:flex sm:mt-8">
        <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
          <div class="flex flex-col">
            <span class="font-bold text-gray-700 uppercase mb-2">About Us</span>
            <span class="my-2 max-w-xs">
              <p class="text-md">
                At Success Rocket, our goal is to minimize time investment while at the same time
                inspiring great, productive collaborative engagement discussions that truly make a
                difference!
              </p>
            </span>
          </div>
          <div class="flex flex-col">
            <span class="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">Social Media</span>
            <span class="my-2">
              <a href="#" class="text-md hover:primary-darker">
                Facebook
              </a>
            </span>
            <span class="my-2">
              <a href="#" class=" text-md hover:primary-darker">
                LinkedIn
              </a>
            </span>
            <span class="my-2">
              <a href="#" class="text-md hover:primary-darker">
                Medium
              </a>
            </span>
          </div>
          <div class="flex-col"></div>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-6">
      <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
        <div class="sm:w-2/3 text-center py-6">
          <p class="text-sm  font-bold mb-2">
            <img className="w-8 inline-block" src={logo} alt="" />
            <span className="text-gray-700"> © 2021 by</span>{' '}
            <a href="https://www.rafaelquarles.com">Rafael Quarles</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

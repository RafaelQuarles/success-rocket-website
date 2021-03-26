import React from 'react';
import styled from 'styled-components';

const Color1 = '#cc0033';
const Color2 = '#33ccff';
const Color3 = '#9933cc';

const animationTime = '100s';

const StyledSvg = styled.svg`
  z-index: -10;
  @media (max-width: 768px) {
    width: 1800px;
    top: 50px;
    left: -200px;
    opacity: 80%;
  }
`;

const HeroWaves = ({ toggle }) => (
  <StyledSvg
    className="absolute"
    viewBox="0 0 1024 600"
    xmlns="http://www.w3.org/2000/svg"
    fill-rule="evenodd"
    clip-rule="evenodd"
    stroke-linejoin="round"
    stroke-miterlimit="2"
  >
    <path
      d="M5.182 268.263V-89.673c130.37-79.133 336.204-102.348 486.537 45.927 345.24 340.51 573.521 138.024 573.521 138.024v173.985"
      fill="url(#_Linear1)"
      transform="matrix(.96599 0 0 -.9615 -5.005 257.937)"
    />
    <path
      d="M5.182 268.263v-385.276c130.37-79.133 291.131-46.813 441.465 101.461 345.239 340.51 618.593 72.237 618.593 72.237v211.578"
      fill="url(#_Linear1)"
      transform="matrix(.96599 0 0 -.9615 -5.005 257.937)"
    />

    <path
      d="M5.182 268.263V-89.673c130.37-79.133 348.96-35.198 499.294 113.077 345.239 340.51 560.764 33.281 560.764 33.281v211.578"
      fill="url(#_Linear1)"
      transform="matrix(.96599 0 0 -.66063 -5.005 177.221)"
    />
    <defs>
      <linearGradient
        id="_Linear1"
        x1="0"
        y1="0"
        x2="1"
        y2="0"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(1060.06 0 0 420.465 5.182 58.03)"
      >
        <stop offset="0.1" stop-opacity=".2">
          <animate
            attributeName="stop-color"
            values={`${Color1}; ${Color2}; ${Color3}; ${Color1}`}
            dur={animationTime}
            repeatCount="indefinite"
          ></animate>
        </stop>
        <stop offset=".5" stop-opacity=".2">
          <animate
            attributeName="stop-color"
            values={`${Color3}; ${Color1}; ${Color2}; ${Color3}`}
            dur={animationTime}
            repeatCount="indefinite"
          ></animate>
        </stop>
        <stop offset=".9" stop-opacity=".2">
          <animate
            attributeName="stop-color"
            values={`${Color2}; ${Color3}; ${Color1}; ${Color2}`}
            dur={animationTime}
            repeatCount="indefinite"
          ></animate>
        </stop>
      </linearGradient>
    </defs>
  </StyledSvg>
);

export default HeroWaves;

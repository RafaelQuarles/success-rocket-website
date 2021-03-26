import React from 'react';
import styled from 'styled-components';

const Color1 = '#cc0033';
const Color2 = '#33ccff';
const Color3 = '#9933cc';

const animationTime = '100s';

const StyledSvg = styled.svg`
  z-index: -100;
  opacity: 40%;
  @media (max-width: 768px) {
    width: 3500px;
    left: 0;
    opacity: 40%;
  }
`;

const FeatureWaves = ({ toggle }) => (
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
      d="M1065.24 575.299C409.215 432.08 381.485 587.191 5.182 551.987v-584.24c112.903 4.096 208.497 45.632 486.537-11.493 422.883-86.885 573.521-42.697 573.521-42.697"
      fill="url(#_Linear1)"
      transform="matrix(.96599 0 0 .84636 -5.005 82.671)"
    />
    <path
      d="M1067.13-9.927s-165.635-90.721-397.672-25.109C444.332 28.623 5.182 70.399 5.182 70.399v448.603c546.731 268.136 613.314-133.038 1061.948-139.09"
      fill="url(#_Linear1)"
      transform="matrix(.96599 0 0 .84636 -5.005 82.671)"
    />
    <path
      d="M1065.24 678.292C664.764 532.135 374.06 1370.68 5.182 638.792V-541.673c218.814 10.358 288.833 191.916 420.204 235.814 246.036 82.213 366.708 36.213 641.744-213.434"
      fill="url(#_Linear1)"
      transform="matrix(.96599 0 0 .34843 -5.005 216.246)"
    />
    <path
      d="M1065.24 579.722C873.932 510.527 355.97 956.918 5.182 583.178V-89.673c130.37-79.133 305.247 152.929 491.64 53.717 322.93-171.888 570.308-74.686 570.308-74.686l-1.89 378.905"
      fill="url(#_Linear1)"
      transform="matrix(.96599 0 0 .5815 -5.005 153.721)"
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

export default FeatureWaves;

import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const circleBubbling = keyframes`
  0% {
    width: 10px;
    height: 10px;
    background-color:rgb(0,0,0);
    transform: translateY(0);
  }

  100% {
    width: 23px;
    height: 23px;
    background-color:rgb(255,255,255);
    transform: translateY(-10px);
  }
`;

const Circle = (props) => {
  const CirclePrimitive = styled.span`
    display: inline-block;
    vertical-align: middle;
    width: 10px;
    height: 10px;
    margin: 24px auto;
    background: rgb(0,0,0);
    border-radius: 49px;
    animation: ${circleBubbling} 1s infinite alternate;
    animation-delay: ${props.delay}s;
  `;
  return <CirclePrimitive />;
};

Circle.propTypes = {
  delay: PropTypes.number,
};

export default Circle;

import React from 'react';

import Wrapper from './Wrapper';
import Circle from './Circle';

function LoadingIndicator() {
  return (
    <Wrapper>
      <Circle delay={0} />
      <Circle delay={0.3} />
      <Circle delay={0.6} />
    </Wrapper>
  );
}

export default LoadingIndicator;

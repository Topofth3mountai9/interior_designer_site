import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import styled from 'styled-components';

const CounterHeadingTwo = styled(motion.h2)`
  /* font-size: 2rem; */
  font-weight: 600;
  color: #333;
  font-size: ${({ theme }) => theme.typography.heading.xxl};

  @media all and (width <= 700px) {
    font-size: ${({ theme }) => theme.typography.heading.xl};
  }
  @media all and (width <= 500px) {
    font-size: ${({ theme }) => theme.typography.heading.title};
  }
`;

export function NumberCounter({ from = 0, to, duration = 2 }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, { duration });
    return controls.stop;
  }, [count, to, duration]);

  return (
    <CounterHeadingTwo className="some_heading">{rounded}</CounterHeadingTwo>
  );
}

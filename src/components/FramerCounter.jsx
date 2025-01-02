import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import styled from 'styled-components';

const CounterSpan = styled(motion.span)`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
`;

export function FramerCounter({ from = 0, to, duration = 2 }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, { duration });
    return controls.stop;
  }, [count, to, duration]);

  return <CounterSpan>{rounded}</CounterSpan>;
}

//using the counter
('use client');

import React, { useState } from 'react';
import styled from 'styled-components';
import { FramerCounter } from '../components/FramerCounter';
import { CustomCounter } from '../components/CustomCounter';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
`;

const CounterSection = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0051a2;
  }
`;

export default function Home() {
  const [key, setKey] = useState(0);

  const resetCounters = () => {
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <Container>
      <CounterSection>
        <Title>Framer Motion Counter</Title>
        <FramerCounter key={`framer-${key}`} to={1000} />
      </CounterSection>

      {/* <CounterSection>
        <Title>Custom Hook Counter</Title>
        <CustomCounter key={`custom-${key}`} to={1000} />
      </CounterSection> */}

      <Button onClick={resetCounters}>Reset Counters</Button>
    </Container>
  );
}

//demo
import React, { useState } from 'react';
import styled from 'styled-components';
import { FramerCounter } from './FramerCounter';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const CounterWrapper = styled.div`
  margin: 1rem 0;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0051a2;
  }
`;

export function FramerCounterDemo() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 100);
  };

  return (
    <Container>
      <Title>Framer Counter Demo</Title>
      <CounterWrapper>
        <FramerCounter from={count - 100} to={count} duration={1} />
      </CounterWrapper>
      <Button onClick={incrementCount}>Add 100</Button>
    </Container>
  );
}

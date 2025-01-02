import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const FadeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.unknown_colors.body_bg};
  //   padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  margin-block-start: 8rem;
`;

const FadeItem = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Headline = styled.h2`
  font-size: 24px;
  color: #333;
  text-align: center;
`;

const Fade = ({ children, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const childrenArray = React.Children.toArray(children);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === childrenArray.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [childrenArray.length, interval]);

  return (
    <FadeContainer>
      <AnimatePresence mode="wait">
        <FadeItem
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {childrenArray[currentIndex]}
        </FadeItem>
      </AnimatePresence>
    </FadeContainer>
  );
};

export default Fade;

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const RevealWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: ${(props) => props.width};
`;

export const Reveal = ({
  children,
  width = 'fit-content',
  animation,
  threshold = 0.2,
  duration = 1,
}) => {
  const [isInView, setIsInView] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const defaultAnimation = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <RevealWrapper ref={ref} width={width}>
      <motion.div
        variants={animation || defaultAnimation}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration: duration, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </RevealWrapper>
  );
};

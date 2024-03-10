import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import './MainSection.css'; // Import the CSS file

const MainSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    from: { opacity: 0 },
    config: config.slow,
  });

  return (
    <animated.div style={{ ...fadeIn }} className="main-section" ref={ref}>
      <div className="card">
        <animated.h3 style={{ ...fadeIn, delay: 300 }}>Date: 15-03-24</animated.h3>
        <animated.h2 className="loc" style={{ ...fadeIn, delay: 600 }}>
          Location:
        </animated.h2>
        <animated.p className="location" style={{ ...fadeIn, delay: 900 }}>
          Yerra Vaari Kalyanamandapam
        </animated.p>
      </div>
    </animated.div>
  );
};

export default MainSection;

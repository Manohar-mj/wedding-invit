// WeddingTimeline.js

import React, { useEffect, useRef } from 'react';
import './WeddingTimeline.css'; // Import the CSS file
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRing } from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated, config } from 'react-spring';

const WeddingTimeline = () => {
  const timelineRef = useRef();

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.slow,
  });

  useEffect(() => {
    const handleScroll = () => {
      const top = timelineRef.current.getBoundingClientRect().top;
      const isVisible = top < window.innerHeight;

      if (isVisible) {
        fadeIn.opacity.start(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fadeIn]);

  return (
    <animated.div className="wedding-timeline" style={fadeIn} ref={timelineRef}>
      <VerticalTimeline>

        <VerticalTimelineElement
          className="vertical-timeline-element"
          iconStyle={{ background: '#E5CA82', color: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
          icon={<FontAwesomeIcon icon={faRing} />}
        >
          <h3 className="vertical-timeline-element-title">Marriage</h3>
          <p className='dat'>Date: 20-Match-2024</p>
          <animated.img
            src={process.env.PUBLIC_URL + '/ma.png'}
            alt="Marriage"
            style={{
              width: '300px',
              height: '300px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              ...fadeIn,
            }}
          />
        </VerticalTimelineElement>
      </VerticalTimeline>
    </animated.div>
  );
};

export default WeddingTimeline;

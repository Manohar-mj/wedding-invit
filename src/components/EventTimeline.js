// src/components/EventTimeline.js
import React from 'react';
import './EventTimeline.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons'; // Import the calendar icon

const EventTimeline = ({ title, date, image }) => {
  return (
    <div className="event-timeline">
      <div className="event-content">
        <h2>{title}</h2>
        <div className="event-date">
          <FontAwesomeIcon icon={faCalendar} />
          <p>{date}</p>
        </div>
      </div>
      <div className="event-image">
        <img src={process.env.PUBLIC_URL + `/${image}`} alt={title} />
      </div>
    </div>
  );
};

export default EventTimeline;

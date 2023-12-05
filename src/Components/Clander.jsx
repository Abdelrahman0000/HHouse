
import React, { useState, useContext } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { LanguageContext } from '../App';

const Root = () => {
  const language = useContext(LanguageContext);
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const [showCalendar1, setShowCalendar1] = useState(false);
  const [showCalendar2, setShowCalendar2] = useState(false);

  const resetDate1 = (val) => {
    setSelectedDate1(val);
    setShowCalendar1(false);
  };

  const resetDate2 = (val) => {
    setSelectedDate2(val);
    setShowCalendar2(false);
  };

  const toggleCalendar1 = () => {
    setShowCalendar1(!showCalendar1);
    setShowCalendar2(false);
  };

  const toggleCalendar2 = () => {
    setShowCalendar2(!showCalendar2);
    setShowCalendar1(false);
  };

  return (
    <>
      <div className="box">
      <p>{language === 'en' ? 'Arrival' : 'الوصول'}</p>
        <div className="main-clander">
          <Value value={selectedDate1} onClick={toggleCalendar1} />
          {showCalendar1 && (
            <div className="calendar-container">
              <CalendarButton onChange={resetDate1} />
            </div>
          )}
        </div>
       
      </div>
      <div className="box">
      <p>{language === 'en' ? 'Departure' : 'المغادرة'}</p>
        <div className="main-clander">
          <Value value={selectedDate2} onClick={toggleCalendar2} />
          {showCalendar2 && (
            <div className="calendar-container">
              <CalendarButton onChange={resetDate2} />
            </div>
          )}
        </div>
       
      </div>
    </>
  );
};

const CalendarButton = ({ onChange }) => {
  const handleDateChange = (date) => {
    onChange(date);
  };

  return (
    <div className="ui calendar" id="example2">
      <Calendar onChange={handleDateChange} className="react-calendar" />
    </div>
  );
};

const Value = ({ value, onClick }) => {
  return (
    <div className="clanedr-value" onClick={onClick}>
      <span>
        <b>
          {value ? value.toDateString() : 'Select Date'}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-calendar"
            viewBox="0 0 16 16"
          >
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
          </svg>
        </b>{' '}
      </span>
      <br />
    </div>
  );
};

export default Root;
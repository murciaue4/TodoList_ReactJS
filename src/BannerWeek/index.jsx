import React, { useContext } from 'react';
import './BannerWeek.css'
import { TodoContext } from '../TodoContext';

const BannerWeek = () => {
  const {date} = useContext(TodoContext)
  return (
    <div className='Banner-Week-contain'>
      <ul>
        <li className={date.getDay() === 0?'day-Actually':null}>Sun</li>
        <li className={date.getDay() === 1?'day-Actually':null}>Mon</li>
        <li className={date.getDay() === 2?'day-Actually':null}>Tue</li>
        <li className={date.getDay() === 3?'day-Actually':null}>Wed</li>
        <li className={date.getDay() === 4?'day-Actually':null}>Thu</li>
        <li className={date.getDay() === 5?'day-Actually':null}>Fri</li>
        <li className={date.getDay() === 6?'day-Actually':null}>Sat</li>
      </ul>
    </div>
  );
};

export {BannerWeek};
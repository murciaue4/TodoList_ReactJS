import React, { useContext } from 'react';
import './BannerWeek.css'
import { TodoContext } from '../TodoContext';

const BannerWeek = () => {
  const {date} = useContext(TodoContext)
  return (
    <div className='Banner-Week-contain'>
      <ul>
        <li className={date.getDay() === 0 &&'day-Actually'}>Sun</li>
        <li className={date.getDay() === 1 &&'day-Actually'}>Mon</li>
        <li className={date.getDay() === 2 &&'day-Actually'}>Tue</li>
        <li className={date.getDay() === 3 &&'day-Actually'}>Wed</li>
        <li className={date.getDay() === 4 &&'day-Actually'}>Thu</li>
        <li className={date.getDay() === 5 &&'day-Actually'}>Fri</li>
        <li className={date.getDay() === 6 &&'day-Actually'}>Sat</li>
      </ul>
    </div>
  );
};

export {BannerWeek};
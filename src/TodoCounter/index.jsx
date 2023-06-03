import React, { useContext } from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";


const TodoCounter = () => {
  const { completed, total, date, day, hours } = useContext(TodoContext);
 
  let counterText = "";
  if (total == 0) {
    counterText = ``;
  } else if (completed == total) {
    counterText = `Felicidades haciste todo!!`;
  } else {
    counterText = `${Math.floor((completed / total) * 100)}% Done`;
  }

  return (
    <div className="TodoCounter">
      <div className="TodoCounterTitle">
        <h1>
          Good
          <br />
          {(hours < 12)? 'Morning!' : 'Afternoon!'}
        </h1>
      </div>
      <div className="TodoCounterStatus">
        <h6 className="TodoCounterStatus-Date">
          Today's {`${day}`} <br />
          <span>{`${date.toDateString().split(' ').splice(1).join(' ')}`}</span>
        </h6>
        <h6 className="TodoCounterStatus-Done">
          {counterText} <br /> <span>Completed Tasks</span>
        </h6>
      </div>
    </div>
  );
};

export { TodoCounter };

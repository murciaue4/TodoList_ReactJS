import React, { useContext } from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";


const TodoCounter = () => {
  const { completed, total, date, day, hours } = useContext(TodoContext);
 let greetingText = '';
  let counterText = "";
  if (total == 0) {
    counterText = ``;
  } else if (completed == total) {
    counterText = `Great, you did it all!`;
  } else {
    counterText = `${Math.floor((completed / total) * 100)}% Done`;
  }

  if (hours < 12 && hours >= 0 ) {
    greetingText = 'Morning!'
  } else if(hours >= 12 && hours < 18 ){
    greetingText = 'Day!'
  }else{
    greetingText = 'Nigth!'
  }

  return (
    <div className="TodoCounter">
      <div className="TodoCounterTitle">
        <h1>
          Good
          <br />
          {greetingText}
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

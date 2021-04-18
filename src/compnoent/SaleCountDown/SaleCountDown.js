import React, { useEffect, useRef, useState } from "react";

const SaleCountDown = (props) => {
  const [minutes, setminutes] = useState(0);
  const [seconds, setseconds] = useState(10);

  const intervalRef = useRef();

  useEffect(() => {
    const id = setInterval(() => {
      if (seconds > 0) {
        setseconds((seconds) => seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(intervalRef.current);
          props.endSale();
        } else {
          setminutes((minutes) => minutes - 1);
          setseconds(59);
        }
      }
    }, 1000);

    intervalRef.current = id;

    return () => clearInterval(intervalRef.current);
  }, [minutes, seconds]);

  return (
    <div>
      {minutes === 0 && seconds === 0 ? (
        <h1>The sale is over!</h1>
      ) : (
        <h1>
          The sale will end in {minutes}:
          {seconds < 10 ? `0${seconds}` : seconds} minutes.
        </h1>
      )}
    </div>
  );
};

export default SaleCountDown;

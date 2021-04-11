import React, { Component, useEffect, useState } from "react";

const SaleCountDown = (props) => {
  //   state = {
  //     minutes: 0,
  //     seconds: 5,
  //   };
  const [minutes, setminutes] = useState(0);
  const [seconds, setseconds] = useState(5);
  const [myInterval, setmyInterval] = useState();

  useEffect(() => {
    setmyInterval(
      setTimeout(() => {
        if (seconds > 0) {
          setseconds((seconds) => seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearTimeout(myInterval);
            props.endSale();
          } else {
            setminutes((minutes) => minutes - 1);
            setseconds(59);
          }
        }
      }, 1000)
    );

    return () => {
      clearTimeout(myInterval);
    };
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

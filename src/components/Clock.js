import { useState, useEffect } from "react";

const useTimer = (currentDate) => {
  const [date, setDate] = useState(currentDate);
  const tick = () => setDate(new Date());

  useEffect(() => {
    let timer = setInterval(() => tick(), 1000);
    return () => clearInterval(timer);
  });
  return date;
};

const Clock = () => {
  let date = useTimer(new Date());
  return <div>{date.toLocaleTimeString()}</div>;
};

export default Clock;

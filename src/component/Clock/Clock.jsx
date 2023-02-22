import React, { useState, useEffect } from 'react';
import Typography from '../Typography/Typhography';

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div style={{ position: 'absolute', top: '180px', left: '100px' }}>
      <Typography color='white' style={{ fontSize: '22px', fontFamily: 'pretendard-bold' }}>
        {date.toLocaleDateString()}&nbsp;
        {date.toLocaleTimeString()}
      </Typography>
    </div>
  );
}

export default Clock;

import React, { useState, useEffect } from 'react';
import Typography from '../Typography/Typhography';

function Clock() {
  const [date, setDate] = useState(new Date());
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  const dateTimeFormat = new Intl.DateTimeFormat('en-US', options);
  const formattedDate = dateTimeFormat.format(date);

  return (
    <div style={{ position: 'absolute', top: '180px', left: '100px' }}>
      <Typography color='white' style={{ fontSize: '22px', fontFamily: 'pretendard-bold' }}>
        {formattedDate}
      </Typography>
    </div>
  );
}

export default Clock;

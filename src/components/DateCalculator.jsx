import React, { useState } from "react";

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month} month, ${day} days, ${year} year`;
};

const DateCalculator = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleCalculate = () => {
    const inputDate = new Date(`${year}-${month}-${day}`);
    const today = new Date();
    const diff = Math.abs(today.getTime() - inputDate.getTime());
    const days = Math.floor(diff / (1000 * 3600 * 24));
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);
    const formattedDate = formatDate(inputDate);
    alert(`${months} months, ${days} days, ${years} years since ${formattedDate}`);
  };

  return (
    <div>
      <label>
        Day:
        <input type="number" value={day} onChange={(e) => setDay(e.target.value)} />
      </label>
      <label>
        Month:
        <input type="number" value={month} onChange={(e) => setMonth(e.target.value)} />
      </label>
      <label>
        Year:
        <input type="number" value={year} onChange={(e) => setYear(e.target.value)} />
      </label>
      <button onClick={handleCalculate}>Calculate</button>
    </div>
  );
};

export default DateCalculator;

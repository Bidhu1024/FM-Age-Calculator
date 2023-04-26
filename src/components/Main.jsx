import { Box, TextField, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import icon from "../assets/images/icon";
import moment from "moment/moment";
const Main = () => {
  // // const date = new Date()

  // const [day, setDay] = useState({
  //   value: "",
  //   error: false,
  //   msg: "",
  // });
  // const [month, setMonth] = useState({
  //   value: "",
  //   error: false,
  //   msg: "",
  // });
  // const [year, setYear] = useState({
  //   value: "",
  //   error: false,
  //   msg: "",
  // });
  //   const daysk = day.value;
  //   const monthsk = month.value;
  //   const yearsk = year.value;

  //   const givenDate = moment({ yearsk, monthsk: monthsk - 1, daysk });
  //   const today = moment();

  //   const duration = moment.duration(today.diff(givenDate));

  //   const yearss = duration.years();
  //   const monthss = duration.months();
  //   const dayss = duration.days();
  
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const today = new Date();
  const enteredDate = new Date(`${month}/${day}/${year}`);
  const differenceInMilliseconds = today - enteredDate;

  const millisecondsInDay = 1000 * 60 * 60 * 24;
  const differenceInDays = Math.floor(differenceInMilliseconds / millisecondsInDay);
  const remainingMilliseconds = differenceInMilliseconds % millisecondsInDay;

  const millisecondsInMonth = 1000 * 60 * 60 * 24 * 30;
  const differenceInMonths = Math.floor(differenceInMilliseconds / millisecondsInMonth);
  const remainingMillisecondsInMonth = differenceInMilliseconds % millisecondsInMonth;

  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365;
  const differenceInYears = Math.floor(differenceInMilliseconds / millisecondsInYear);

  const handleDayChange = (event) => {
    setDay(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        backgroundColor: "red",
      }}
    >
      <Box sx={{ width: "50%", height: "50%", backgroundColor: "yellow" }}>
        <Box
          sx={{
            display: "flex",
            width: "60%",
            justifyContent: "space-between",
            padding: "20px 40px",
            borderBottom: 1,
          }}
        >
          <Box sx={{ width: "30%" }}>
            <label style={{ fontSize: "1rem" }}>DAY</label>
            <TextField
              placeholder="DD"
             
              type="number"
               value={day} 
               onChange={handleDayChange}
            />
          </Box>
          <Box sx={{ width: "30%" }}>
            <label>MONTH</label>
            <TextField
              placeholder="MM"
             
              type="number" value={month} onChange={handleMonthChange}
            />
          </Box>
          <Box sx={{ width: "30%" }}>
            <label>YEAR</label>
            <TextField
              placeholder="YYYY"
              type="number" value={year} onChange={handleYearChange}
            />
          </Box>
          <img src={icon} alt="" />
        </Box>
   
        {day && month && year && (
        <>
          <p>The difference between the entered date and today's date is:</p>
          <p>{differenceInDays} days</p>
          <p>{differenceInMonths} months</p>
          <p>{differenceInYears} years</p>
        </>
        )
        }

      </Box>
    </Box>
  );
};

export default Main;

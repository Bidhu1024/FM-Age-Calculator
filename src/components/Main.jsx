import { Box, TextField, Typography,Button } from "@mui/material";
import React, { useState } from "react";
import icon from "../assets/images/icon";
import moment from "moment/moment";
const Main = () => {
  // const date = new Date()

  const [day, setDay] = useState({
    value: "",
    error: false,
    msg: "",
  });
  const [month, setMonth] = useState({
    value: "",
    error: false,
    msg: "",
  });
  const [year, setYear] = useState({
    value: "",
    error: false,
    msg: "",
  });
  const days = day.value;
  const months = month.value;
  const years = year.value;

  const givenDate = moment({ years, months: months - 1, days });
  const today = moment();

  const duration = moment.duration(today.diff(givenDate));

  const yearss = duration.years();
  const monthss = duration.months();
  const dayss = duration.days();

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
              value={day.value}
              helperText={day.msg}
              onChange={(e) => {
                let text = e.target.value;
                if (text === "") {
                  setDay({
                    value: text,
                    error: "true",
                    msg: "This field is required",
                  });
                } else if (text > 31) {
                  setDay({
                    value: text,
                    error: "true",
                    msg: "Must be a valid day",
                  });
                } else {
                  setDay({
                    value: text,
                    error: false,
                    msg: "",
                  });
                }
              }}
            />
          </Box>
          <Box sx={{ width: "30%" }}>
            <label>MONTH</label>
            <TextField placeholder="MM" onChange={(e)=>{
                let text = e.target.value;
                if (text === "") {
                  setMonth({
                    value: text,
                    error: "true",
                    msg: "This field is required",
                  });
                } else if (text > 12) {
                  setMonth({
                    value: text,
                    error: "true",
                    msg: "Must be a valid month",
                  });
                } else {
                  setMonth({
                    value: text,
                    error: false,
                    msg: "",
                  });
            }}} />
          </Box>
          <Box sx={{ width: "30%" }}>
            <label>YEAR</label>
            <TextField placeholder="YYYY" onChange={(e)=>{
                let text = e.target.value;
                if (text === "") {
                  setYear({
                    value: text,
                    error: "true",
                    msg: "This field is required",
                  });
                } else if (text > today) {
                  setYear({
                    value: text,
                    error: "true",
                    msg: "Must be a valid day",
                  });
                } else {
                  setYear({
                    value: text,
                    error: false,
                    msg: "",
                  });
                }
            }
            } />
          </Box>
          <img src={icon} alt="" />
        </Box>
        <Button></Button>
        <Box>
          <Typography>{`${yearss} years, ${monthss} months, and ${dayss} days`}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Main;

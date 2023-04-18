import { Box, TextField } from "@mui/material";
import React,{useState} from "react";
import icon from "../assets/images/icon";
const Main = () => {

    const [day,setDay] = useState({
        value:'',
        error:false,
        msg:''
    })
    const [month,setMonth] = useState({
        value:'',
        error:false,
        msg:''
    })
    const [year,setYear] = useState({
        value:'',
        error:false,
        msg:''
    })
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
            borderBottom:1
          }}
        >
          <Box sx={{ width: "30%" }}>
            <label style={{ fontSize: "1rem" }}>DAY</label>
            <TextField placeholder="DD"
            value={day.value}
            helperText={day.msg}
            onChange={
               ()=>{

                let text = e.target.value
                if(day.value === ""){
                setDay({
                    value:'',
                    error:'true',
                    msg:'This field is required'
                })
               }else if(day.value>31){
                setDay({
                    value:{day.value},
                    error:'true',
                    msg:'This field is required'
                })
               }
               }
            }
             />
          </Box>
          <Box sx={{ width: "30%" }}>
            <label>MONTH</label>
            <TextField placeholder="MM" />
          </Box>
          <Box sx={{ width: "30%" }}>
            <label>YEAR</label>
            <TextField placeholder="YYYY" />
          </Box>
          <img src={icon} alt="" />
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default Main;

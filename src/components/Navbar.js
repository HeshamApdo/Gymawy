import React from 'react'
import { Link } from 'react-router-dom'
import { Stack, Typography } from '@mui/material'
import Logo from "../assets/images/Logo3.png"
const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{gap:{sm: "100px", xs: "1px"}, mt:{sm: "32px", xs: "20px"}, justifyContent: "none"}}>
      <Link to="/">
        <img src={Logo} alt='Logo' style={{width: "100px", height: "100px",margin: "0 20px"}}/>
      </Link>
      <Stack>
        <Typography sx={{
          fontSize: {lg: "100px", xs: "50px"},
          color: "#FF2625",
        }}>
          <span style={{fontWeight: "900"}}>𝐆</span><span style={{fontStyle: "italic", color: "black", fontWeight: "900"}}>ymawy</span>
        </Typography>
        {/* <Link to="/" style={{textDecoration: "none", color: "#3A1212", borderBottom: "3px solid #FF2625"}}>Home</Link> */}
        {/* <a href='#exercises' style={{textDecoration: "none", color: "#3A1212"}}>Exercises</a> */}
      </Stack>
    </Stack>
  )
}

export default Navbar
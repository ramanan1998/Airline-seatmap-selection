import { Box, Typography } from '@mui/material';
import React from 'react';

function Facility(props) {

    const style = {
        position: "absolute",
        left: `${props.y*4}em `,
        top: `${props.x*4}em`,
        height: "50px",
        width: "50px",
        borderRadius: 3,
        boxShadow: "0px 2px 10px rgba(155, 157, 172, 0.3)",
        color: "black",
        backgroundColor: "secondary.main",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }


    return (
      <Box sx={style}>
        <Typography>{props.code}</Typography>
      </Box>
    )
}

export default Facility
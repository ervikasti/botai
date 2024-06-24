// import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function BasicRating({ handleRating, value, pageFrom }) {


  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Rating</Typography>
          {pageFrom==='History'?(<Rating
            name="simple-controlled"
            value={value}
            disabled/>):(<Rating
            name="simple-controlled"
            value={value}
            onChange={
              (event, newValue) => {  
                handleRating(newValue);
              }
            } />)}
    </Box>
  );
}

export { BasicRating }

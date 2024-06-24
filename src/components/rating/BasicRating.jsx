// import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function BasicRating({ handleRating,value }) {


  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Rating</Typography>
      {/* {isHistoryActive ? (
        <Rating
          name="simple-controlled"
          value={value}
          />) :
        (<Rating
          name="simple-controlled"
          value={value}
          onChange={
            (event, newValue) => {
              // setValue(newValue);
              handleRating(newValue);
            }
          }/>)} */}

<Rating
          name="simple-controlled"
          value={value}
          onChange={
            (event, newValue) => {
              // setValue(newValue);
              handleRating(newValue);
            }
          }/>
     


    </Box>
  );
}

export { BasicRating }

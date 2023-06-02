import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', xs: '70px' },
      ml: { sm: '50px' }
    }} position="relative" p="20px">
      <Typography color="#FF2625" fontWeight="600" fontSize="26px" >
        💪My Fitness Club
      </Typography>
      <Typography>
          Sweat💦,Smile😊<br/>and Repeat🔁

      </Typography>
      <Typography>
          Check out the most effectiev exercises here!
      </Typography>
    </Box>
  )
}

export default HeroBanner

import React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import { SpinnerContainer } from './SpinnerStyled';

const Spinner = () => {
  return (
   
      <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
     
      <LinearProgress color="secondary" />
      <LinearProgress color="secondary" />
      <LinearProgress color="secondary" />
   
    </Stack>
  
  );
};  

export default Spinner;

import React, { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FilterContainer } from './filterStyled';
import Button from '@mui/material/Button';

const Filter = () => {
  return (
    <FilterContainer className='calendar' column={false} justifyContent={'space-around'}>
      <FilterContainer >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker label='Fecha inicio ' />
          </DemoContainer>
        </LocalizationProvider>
      </FilterContainer>
      <FilterContainer >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker label='Fecha fin' />
          </DemoContainer>
        </LocalizationProvider>
      
          <FilterContainer marginLeft={'3rem'} heigth={'4rem'} marginTop={'1rem'}> 
     
     <Button variant="contained">Buscar</Button>
  
   </FilterContainer>
            
        
        
      </FilterContainer>
    </FilterContainer>
  );
};

export default Filter;

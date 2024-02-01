import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import getDolar from '../api/getDolar';
import Typography from '@mui/material/Typography';
import { DashBoardContainer } from './DashBoardStyled';
import Spinner from './spinner/Spinner';
import Filter from './filter/filter';
import ReactVirtualizedTable from './table/TableDolars';
import TableDolars from './table/TableDolars';
import ChartComponent from './graphics/ChartComponent';

const Dashboard = () => {
  const { getDolars } = getDolar();

  /**
   * stracting url and name to pokemon water
   */
  useEffect(() => {
    getDolars();
  }, []);


  const spinn = useSelector((state) => state.dolar.spinnerLoader);
  const dolars = useSelector((state) => state.dolar.dolarReq);


  return (
    <DashBoardContainer column wrap aligncontent={'space-around'}>
    
      {spinn  ? (
        <DashBoardContainer margintop={'50%'} width={'50%'} aligncontent={'space-around'}>
          <Spinner />
        </DashBoardContainer>
      ) : (
        <DashBoardContainer column>
          
          <DashBoardContainer column margintop={'2rem'} aligncontent={'space-around'} wrap>
            <Typography variant='h1' gutterBottom>
              Dashboard de dolar
            </Typography>
          </DashBoardContainer>
          <DashBoardContainer column>
            <Filter />
          </DashBoardContainer>
          <DashBoardContainer margintop={'2rem'} justifycontent={'center'}  >
          {
            dolars.length > 0 && <ChartComponent  data={dolars}/>
          }
          
          </DashBoardContainer>
          <DashBoardContainer margintop={'2rem'} justifycontent={'center'} > <DashBoardContainer >
            <TableDolars  />
          </DashBoardContainer>
        
        
          </DashBoardContainer>
         
        </DashBoardContainer>
      )}
    </DashBoardContainer>
  );
};

export default Dashboard;

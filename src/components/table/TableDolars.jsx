import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { TableCont } from './TableStyled';
import { useSelector } from 'react-redux';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Popper from '@mui/material/Popper';

const TableDolars = () => {
  const dolars = useSelector((state) => state.dolar.dolarReq);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  
  return (
    <TableCont className='dolarTable'> <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="left">Fecha</TableCell>
          <TableCell align="left">Valor</TableCell>
          <TableCell align="left">accion</TableCell>
          
        </TableRow>
      </TableHead>
      <TableBody>
        {dolars.map((row) => (
          <TableRow key={row.date}>
            <TableCell align="left">
              {row.date}
            </TableCell>
            <TableCell align="left">{row.value}</TableCell>
            <TableCell align="left">  <div>
      <button aria-describedby={id} type="button" onClick={handleClick}>
      <LinearScaleIcon/>
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
      </Popper>
    </div></TableCell>
           
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer></TableCont>
   
  )
}

export default TableDolars
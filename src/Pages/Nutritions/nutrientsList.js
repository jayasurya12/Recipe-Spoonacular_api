import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    Width: 80,
  },
  row:{
      backgroundColor:'rgb(216, 156, 44)',
      color:"red"
  }
});

const AcccessibleTable =({data:{nutrients}})=> {
    console.log(nutrients);
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <caption>A basic table example with a caption</caption>
        <TableHead>
          <TableRow className={classes.row}>
            <TableCell>Nutrients</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">DailyNeed</TableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
          {nutrients.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.amount} {row.unit}</TableCell>
              <TableCell align="right">{row.percentOfDailyNeeds} {row.unit}</TableCell>
  
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default  AcccessibleTable
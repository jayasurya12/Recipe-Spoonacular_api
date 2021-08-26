import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HtmlParser from 'react-html-parser';
import './summary.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    textAlign:"center"
  },
}));

const SimpleAccordion=({data})=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography className={classes.heading}>Summary & Instructions</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography className='instructions'>
              <h4>Instructions</h4>
              {HtmlParser(data.instructions)}
          </Typography>
          
          <Typography className="summary">
              <h4>Summary</h4>
            {HtmlParser(data.summary)}
          </Typography>
          
        </AccordionDetails>
      </Accordion>
      
     
    </div>
  );
}

export default SimpleAccordion
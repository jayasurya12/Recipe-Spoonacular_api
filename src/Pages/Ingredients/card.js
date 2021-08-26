import { makeStyles, ServerStyleSheets, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex', 
    flexDirection:'row'
  },
  details: {
    display: 'flex',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 180,
    borderRadius:'3px',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const MediaControlCard=({data})=> {
  const classes = useStyles();
  const theme = useTheme();
  const click=()=>{
    
  }
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h5">
          name : {data.name}
          </Typography>
          <Typography variant="h6" color="textSecondary">
             {data.aisle}
          </Typography>
          <Typography variant='body2' >
            amount : {data.amount} {data?.unit}
          </Typography>
        </CardContent>
        
      </div>
      <CardMedia
        className={classes.cover}
        image={`https://spoonacular.com/recipeImages/${data.id}-240x150.jpg`}
        title={data.name}
      />
    </Card>
  );
}

export default MediaControlCard
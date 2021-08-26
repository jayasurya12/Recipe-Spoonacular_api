import React, { useState ,useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import  style  from './Bottom.module.css';
import {dataId,nutritionId} from '../../store/action/User'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {API_KEY} from '../../API/apiKey'
import axios from 'axios'
import {Grid} from '@material-ui/core'
import {Redirect,Link} from 'react-router-dom'

const MediaCard=()=> {
  const dispatch = useDispatch()
  const [items, setItems]=useState()
  const search=useSelector(state=>state.search)
 
  useEffect(async() => {
      try {
      const randomRecipe=(`https://api.spoonacular.com/recipes/complexSearch?query=${search}&number=100&apiKey=${API_KEY}`)
      const {data}=await axios.get(randomRecipe)
      setItems(data.results)  
    } 

      catch (error) {
      console.log(error);
      } 
  }, [search])

  const handleClick=(data)=>{
    dispatch(dataId(data.id))
    
  }
  const nutrientsClick=(data)=>{
    dispatch(nutritionId(data.id))
  }
  return (
    <div className={style.mainCard}>
      {items?.length==""?(<h1>Loading...</h1>): items?.map((data,index)=>{
        return(
          <Grid item xs className={style.grid} key={index}>
          <Card className={style.card} >
            <CardActionArea>
              <CardMedia
                className={style.media}
                image={data.image}
                title={data.title}/>
            
              <CardContent className={style.textArea}>
                  <Typography gutterBottom variant="h5" component="h2">
                  {data.title}
                  </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={style.btn}>
              <Link to='/nutrients'>
              <Button size="small" color="primary" onClick={()=>nutrientsClick(data)}>
                Nutrients
              </Button>
              </Link>
              <Link to="/ingredients">
                <Button size="small" color="primary" 
                className={style.btn2} onClick={()=>handleClick(data)}>
                Ingredients
                </Button>
              </Link>
            </CardActions>
          </Card>
          </Grid>
        )
      })}
    </div>
  );
}


export default MediaCard;
import React,{useState,useEffect} from 'react'
import style from './ingredients.module.css'
import {useSelector} from 'react-redux'
import axios from 'axios'
import {API_KEY} from '../../API/apiKey'
import {Grid,Container,Paper, Button, Typography} from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import MediaControlCard from './card'
import {useHistory} from 'react-router-dom'
import Summary from './summary'

const Ingredients = ({}) => {
    const [recipeData, setRecipedata] = useState([])
    const [ingredients,setIngredent] =useState([])
    const history=useHistory()

    const id=useSelector(state=>state.id)
    const idSearchAPI=(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&includeNutrition=true`)
    
    useEffect(async() => {
        const {data}=await axios.get(idSearchAPI)
        
        setRecipedata(data)
        setIngredent(data.extendedIngredients)
    }, [])
    if(recipeData.length ===""){
        return <h1>Loading..</h1>
    }

    return (
        <div className={style.ingredient}>
            <Container maxWidth="sm" className={style.cardImg}>
            <Grid container className={style.name}>
                <Grid item xs={12}>
                    <Paper className={style.title}>{recipeData.title}</Paper>
                </Grid>
            </Grid>
           <img src={recipeData?.image} maxWidth="380px"/>
           <Grid>
               <Typography variant="h6" className={style.cook}>
               Cooking Time {recipeData.readyInMinutes} minutes
               </Typography>
            </Grid>
           <div className={style.button}>
               <Button onClick={()=>history.goBack()} className={style.btn}>Back</Button>
               </div>
           </Container>
           
           <Grid container>
               <Grid item xs="12" className={style.card}>
                       {ingredients.map((data,index)=>{
                           return(
                               <div className={style.items}>
                                   <MediaControlCard data={data} className={style.card}/>
                               </div>
                           )
                       })}
               </Grid>
               <Container Fixed className={style.summary}>
               <Grid item xs='12' >
                       <Summary data={recipeData}/>
                </Grid> 
                </Container>     
           </Grid>
           
        </div>
    )
}

export default Ingredients

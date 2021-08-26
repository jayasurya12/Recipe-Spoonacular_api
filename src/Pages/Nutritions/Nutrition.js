import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {API_KEY} from '../../API/apiKey'
import axios from 'axios'
import style from './Nutritions.module.css'
import {Container,Typography,Paper,Grid,Accordion,
    AccordionDetails,AccordionSummary,Button} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AcccessibleTable from './nutrientsList'

const Nutrition = () => {
    const [nutrient, setNutrient]=useState([])
    const [expanded, setExpanded] = useState(false);
    const history=useHistory() 

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const id=useSelector((state)=>state.nutritionId)
    const nutrientAPI=(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&includeNutrition=true`)
    
    useEffect(async() => {
        const {data}=await axios.get(nutrientAPI)
        setNutrient(data)
    }, [id])
   
    if(nutrient.length ==""){
        return <h1 className={style.loading}>Loading...</h1>
    }
    console.log(nutrient);
    return (
        <Container maxWidth="sm">
        <div className={style.imgBg}>
            <img src={nutrient.image} alt={nutrient.title}/>
            <Typography variant="h6" className={style.title}>{nutrient.title}</Typography>
        </div>

        <div className={style.gridRoot}>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={5}>
                    <Paper className={style.paper}>Carbohydrate : {nutrient.nutrition.caloricBreakdown.percentCarbs}%</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={style.paper}>Fat : {nutrient.nutrition.caloricBreakdown.percentFat}%</Paper>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Paper className={style.paper}>Protein : {nutrient.nutrition.caloricBreakdown.percentProtein}%</Paper>
                </Grid>
            </Grid>
            
        </div>
        <Button variant="contained" className={style.btn} onClick={()=>history.goBack()}>GO BACK</Button>
        
        <div className={style.diets}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header">
                <Typography >Diets</Typography>
            </AccordionSummary>
            
                {nutrient?.diets.map((data,index)=>{
                    return(
                        <AccordionDetails>
                            <Typography>{data}</Typography>
                        </AccordionDetails>
                    )
                })}
                
        </Accordion>
    </div>
        <AcccessibleTable data={nutrient?.nutrition}/>
        </Container>
    )
}

export default Nutrition

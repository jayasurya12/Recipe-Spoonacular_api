import React,{useState} from 'react'
import style from './SearchTab.module.css'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Bottom from '../Bottom/Bottom';
import {useDispatch} from 'react-redux'
import {SearchData} from '../../store/action/User'


const SearchBar = () => {
    const [input, setInput]=useState("")

    const dispatch = useDispatch()
    const handleChange=(event)=>{
        setInput(event.target.value)
    }
    const Onclick=(e)=>{
        setInput("")
    }
    dispatch(SearchData(input))
    return (
        <div className={style.search}>
            <Paper component="form" className={style.root} onSubmit={(e)=>e.preventDefault()}>   
                <InputBase
                    className={style.input}
                    placeholder="Find your Recipes"
                    value={input}
                    onChange={handleChange}
                    onClick={Onclick}
                    
                    />
                <IconButton type="submit" className={style.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
            
        </div>
    )
}

export default SearchBar

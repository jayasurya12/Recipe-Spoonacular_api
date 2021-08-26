import React,{useState} from 'react'
import style from './Header.module.css'
import { Button } from '@material-ui/core'
import {Buttonvalue} from '../../store/action/User'
import {useDispatch} from 'react-redux'

const Header = () => {
    const [button, setButton] = useState('')
    const dispatch = useDispatch()

    const handleClick=(event)=>{
        setButton(event.target.innerText)
        console.log(event);
    }
    dispatch(Buttonvalue(button))
    return (
        <div className={style.recipe}>
            <img className={style.logo1} src={"https://cdn6.f-cdn.com/contestentries/1403712/20448613/5b9038e77d65c_thumb900.jpg"}/>
            <div className={style.navCenter}>
                <Button onClick={handleClick}>vegetarian</Button>
                <Button onClick={handleClick}>Chicken</Button>
                <Button onClick={handleClick}>Juice</Button>
                <Button onClick={handleClick}>Mutton</Button>
                <Button onClick={handleClick}>Fruits</Button>
            </div>
            <img className={style.logo2}src={"https://logodix.com/logo/2178221.png"}/>
        </div>
    )
}

export default Header

import style from './Home.module.css'
import Header from '../../components/Header/Header'
import Search from '../../components/SearchBar/SearchBar'
import Bottom from '../../components/Bottom/Bottom'

const Home = () => {
    return (
        <div className='home'>
            <Header/>
            <Search/>
            <Bottom/>    
        
        </div>
    )
}

export default Home
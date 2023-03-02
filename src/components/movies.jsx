import TitleMovies from './titleMovies';
import Poster from './poster';
import Calification from './calification';
import { useStyles } from '../hooks/palette';

const Movies = ()=>{
    const classes=useStyles()
    return(
        <div className={classes.Movies}>
            <TitleMovies 
            title={'PLANE'}
            />
            <Poster></Poster>
            <Calification></Calification>
        </div>
    )
}
export default Movies;
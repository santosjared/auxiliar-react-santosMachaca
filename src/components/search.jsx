import { useStyles } from '../hooks/palette';

const Search = () => {
    const classes=useStyles()
return(
    <div className={classes.heart}>
        <input placeholder='search...'/>
        <button>search</button>
    </div>
)
}
export default Search;
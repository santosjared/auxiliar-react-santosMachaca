import { useStyles } from "../hooks/palette"

const Poster = () => {
    const classes=useStyles()
    return (
        <div className={classes.Poster}>
            <img src='/assets/plane.jpg'></img>
        </div>
    )
}
export default Poster;
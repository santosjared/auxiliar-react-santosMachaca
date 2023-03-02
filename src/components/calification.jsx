import { useCounter } from '../hooks/useCounter';
import { useStyles } from '../hooks/palette';
const Calification =()=>{
    const classes=useStyles();
    const [counter,incrementCounter,decrementCounter,resetCounter]=useCounter();
    
    return(<div className={classes.Calification}>
        <img src={`/assets/${counter}.png`}></img>
    </div>)
}
export default Calification;
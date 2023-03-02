import {makeStyles} from '@material-ui/core'
import Poster from '../components/poster'

export const useStyles = makeStyles(theme=>({
    heart:{
        backgroundColor:theme.palette.primary.main

    },
    Movies:{
        backgroundColor:theme.palette.primary.main,
        color:theme.palette.primary.contrastText,
        padding: '1rem',
        position:'absolute',
        width:'18rem',
        height:'23rem',
        position:'relative'
    },
    Poster:{
        height:'25rem',
        '& img':{
            height:'15rem',
            width:'15rem'
        }
    },
    Calification:{
        position:'relative',
        '& img':{
            height:'3rem',
            width:'15rem',
            top:'0'
        }
    }
}))
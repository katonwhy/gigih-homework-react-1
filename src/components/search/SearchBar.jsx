import Button from '@material-ui/core/Button';
import {
    withStyles,
    makeStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'white',
      },
      '& .MuiInputBase-root': {
        color: 'white',
      },
      '& label': {
        color: 'lightgray',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'lightgray',
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'lime',
        },
      },
    },
  })(TextField);

const useStyles = makeStyles((theme) => ({
root: {
    display: 'flex',
    flexWrap: 'wrap',
},
margin: {
    margin: theme.spacing(1),
},
}));

const SearchBar = ({text, onSubmit, handleInput}) => {
    const classes = useStyles();

    return(
        <form onSubmit={(e) => onSubmit(e)}>
            <CssTextField
                className={classes.margin}
                label="Search Song Track"
                variant="outlined"
                id="custom-css-outlined-input"
                fullWidth
                value={text} 
                onChange={handleInput}
            />
            <Button 
                variant="outlined" 
                type='submit' 
                color="secondary"
                startIcon={<SearchIcon />}
            >Search
            </Button>
        </form>
    )
}

export default SearchBar
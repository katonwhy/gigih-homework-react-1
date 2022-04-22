import Button from '@material-ui/core/Button';
import {
    withStyles,
    makeStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';

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


const PlaylistForm = ({form, onSubmit, handleForm, validateForm, validateFormMessage}) => {
    const classes = useStyles();

    return(
        <form onSubmit={onSubmit}>
            <h2>Create Your Spotify Playlist</h2>
            <CssTextField
                className={classes.margin}
                label="Playlist Name"
                variant="outlined"
                id="custom-css-outlined-input"
                name="name"
                fullWidth
                required
                error={validateForm}
                helperText={validateFormMessage}
                value={form.name} 
                onChange={handleForm}
            />
            <br/>
            <CssTextField
                className={classes.margin}
                label="Playlist Description"
                variant="outlined"
                id="custom-css-outlined-input"
                name="description"
                fullWidth
                required
                multiline
                minRows={4}
                value={form.description} 
                onChange={handleForm}
            />
             <Button 
                variant="outlined" 
                type='submit' 
                color="secondary"
                startIcon={<TurnedInNotIcon />}
                disabled={validateForm}
            >CREATE Playlist
            </Button>

        </form>
    )
}
export default PlaylistForm

import Button from '@material-ui/core/Button';

const SearchBar = ({text, onSubmit, handleInput}) => {
    return(
        <form onSubmit={(e) => onSubmit(e)}>
            <input type="text" id="song" name="song" value={text} onChange={handleInput}/>
            <Button variant="outlined" type='submit' color="secondary">Search</Button>
        </form>
    )
}

export default SearchBar
const SearchBar = ({text, onSubmit, handleInput}) => {
    return(
        <form onSubmit={(e) => onSubmit(e)}>
            <input type="text" id="song" name="song" value={text} onChange={handleInput}/>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default SearchBar
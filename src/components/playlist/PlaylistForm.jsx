import Button from '@material-ui/core/Button';

const PlaylistForm = ({form, onSubmit, handleForm}) => {
    return(
        <form onSubmit={onSubmit}>
            <h2>Create Your Music Playlist</h2>
            <label htmlFor="name">Name : </label>
            <input 
                type="text" 
                id="name" 
                name="name"
                placeholder="title.." 
                value={form.name} 
                onChange={handleForm}
            />
            <br/>
            <label htmlFor="description">Description : </label>
            <input 
                type="textarea" 
                id="description" 
                name="description" 
                placeholder="description.."
                value={form.description}
                onChange={handleForm}
            />
             <Button variant="outlined" type='submit' color="secondary">Submit</Button>

        </form>
    )
}
export default PlaylistForm

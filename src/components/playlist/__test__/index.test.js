import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import PlaylistForm from '../PlaylistForm';

const setup = () => render(
    <PlaylistForm 
        form={{
            name : "New Playlist",
            description : "New Playlist Description"
        }} 
        onSubmit={()=>{}} 
        handleForm={()=>{}} 
        validateForm 
        validateFormMessage={''}
    />
);


describe('Create playlist form component test event', () => {
    beforeEach(setup);
    afterEach(cleanup);
  
    it('Success rendered', () => {
      const titleInput = screen.getByTestId('title-playlist');
      const descriptionInput = screen.getByTestId('description-playlist');
      const buttonCreate = screen.getByTestId('btn-create-playlist');
  
      expect(titleInput).toBeInTheDocument();
      expect(descriptionInput).toBeInTheDocument();
      expect(buttonCreate).toBeInTheDocument();
    });
  
    it('Can type in form', () => {
      const titleInput = screen.getByTestId('title-playlist');
      const descriptionInput = screen.getByTestId('description-playlist');
  
      userEvent.type(titleInput, 'New Playlist');
      userEvent.type(descriptionInput, 'New Playlist Description');
  
      expect(titleInput).toHaveTextContent('Playlist Name');
      expect(descriptionInput).toHaveTextContent('Playlist Description');
    });
  
});
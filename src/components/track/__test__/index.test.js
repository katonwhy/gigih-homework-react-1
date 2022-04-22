import { render, screen } from '@testing-library/react';
import SongTrack from '../index'
import '@testing-library/jest-dom'

it('renders track component', () => {
    render(
    <SongTrack 
        src='https://i.scdn.co/image/ab67616d00001e0241e31d6ea1d493dd77933ee5' 
        title='stay' 
        artist='justin bieber' 
        album='The Kid LAROI' 
    />);
    const trackElement = screen.getByText('justin bieber')
  
    expect(trackElement).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText('stay')).toBeInTheDocument();
    expect(screen.getByText('The Kid LAROI')).toBeInTheDocument();
    expect(screen.getByText('Select')).toContainHTML('span')

});
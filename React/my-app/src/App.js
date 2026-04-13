import {useState} from 'react'
import SongDisplay from "./components/SongDisplay";
import SongControl from "./components/SongControl";



function App() {

  const [song, setSong] = useState('Song 1');

  return (
    <div className="App">


      <SongDisplay song={song} />
      <SongControl setSong={setSong} />
     
       
    </div>
  );
}

export default App;

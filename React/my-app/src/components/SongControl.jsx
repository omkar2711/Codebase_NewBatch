import React from 'react'

const SongControl = ({setSong}) => {

    const handleChangeSong = () => {
        setSong('Song 2');
    }
    
  return (
    <div>
      <button onClick={handleChangeSong}>
        Play Song 2
      </button>
    </div>
  )
}

export default SongControl

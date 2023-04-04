import React from 'react'
import { useState } from 'react'
import searchButton from '../../images/search.png'
import googleVoice from '../../images/google-voice.png'
import googleTv from '../../images/tv-image.svg'

const Search = () => {
    const [keyword, setKeyword] = useState('')

   const handleKeyDown = (event) => {
    if (event.keyCode === 13) { 
      setKeyword(event.target.value); 
    }
  };

  return (
    <div>
        <form action="#">
            <div className="search-bar flex">
                <div className="search-btn flex">
                    <img src={searchButton} alt=""></img>
                </div>
                <input type="search" onKeyDown={handleKeyDown}></input>
                <div className="google-btns flex">
                    <div className="voice">
                        <img src={googleVoice} alt=""></img>
                    </div>
                    <div className="tv">
                        <img src={googleTv} alt=""></img>
                    </div>
                </div>
            </div>
        </form>
        <p className='entered-text'>{keyword}</p>
    </div>
  )
}

export default Search

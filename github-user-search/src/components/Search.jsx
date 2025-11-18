import React, { useState } from 'react'

const Search = ({onSearch}) => {
    const[username, SetUsername]= useState(null)
    function HandleSubmit(e){
        e.preventDefault()
        if(username.trim()){
            onSearch(username)
            SetUsername('')
        }
    }
  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <input type='text' value= {username} onChange={(e)=>SetUsername(e.target.value)}></input>
        <br></br>
        <button  type='submit'>
            Search
        </button>
      </form>
    </div>
  )
}

export default Search

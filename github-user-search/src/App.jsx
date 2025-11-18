import './App.css'
import Search from './components/Search.jsx'
import { useState } from 'react'
function App() {
  const [UserData, SetUserData]=useState(null)
  const handleSearch = (username) => {
    console.log("Searching for:", username);
    fetch(`https://api.github.com/users/${username}`)
      .then(res=>res.json())
      .then(data =>SetUserData(data))
  };
  return (
    <>
      <div>
        <h1>GitHub User Search</h1>
        <Search onSearch={handleSearch}/>
        {UserData && (
        <div>
          <h2>{UserData.login}</h2>
          <img src={UserData.avatar_url} alt={UserData.login} width={100} />
          <p>{UserData.bio}</p>
        </div>
        )}
      </div>

    </>
  )
}

export default App

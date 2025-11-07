import React,{useState} from 'react'

const Counter = () => {
    const [count, setCount]=useState(0)
    function increase(){
        setCount(count+1)
    }
    function decrease(){
        setCount(count-1)
    }
    function reset(){
        setCount(0)
    }
  return (
    <div>
      <p>You pressed the button {count} times!</p>  
      <button onClick={increase}>Increase</button>
      <br></br>
      <button onClick={decrease}>Decrease</button>
      <br></br>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter

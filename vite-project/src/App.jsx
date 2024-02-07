import { useState } from "react"
function App() {

  const [counter, setCounter] = useState(3);

  return (
    <>
    <h1>Chai pe charcha</h1>
    <h2>Counter value : {counter}</h2>

    <button onClick ={ () => {
      if(counter<10){
        setCounter(counter+1)}}}>Add Value</button>
    <button onClick ={ () => {
      if(counter>0){
        setCounter(counter-1)
      }}}>Decrease Value</button>

    </>
  )
}

export default App

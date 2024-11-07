import Data from './Components/Data'
import { useState } from 'react'
import './App.css'
import List from './Components/List'
function App() {
  const [people,setPeople]=useState(Data)
  return(<main>
    <section className="container">
      <h3>{people.length} Birthdays today</h3>
      <List people={people}/>
      <button type="button" className="btn btn-block" onClick={()=>{setPeople([])}}>clear all</button>
    </section>
  </main>)
}

export default App

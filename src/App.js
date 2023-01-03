import './App.css';
import DefaultCard from '../src/components/DefaultCard/index'
import data from '../src/App_mockdata'
import DefaultButton from '../src/components/DefaultButton/index'
import React, { useState } from 'react'

let position = 0;


function App() {
  const [personState, setPersonState] = useState([])

  const onClickDefaultButton = () => {
    if (position === data.length) {
      setPersonState([])
      position = 0;
    }else{
      setPersonState([...personState, data[position]])
      position++;
    }
  }

  return (
    <div className="App">
      {personState.map((person, index) =><DefaultCard key={index} name={person.name.first} surname={person.name.last} photo={person.picture.medium} email={person.email}/>)}
      <DefaultButton onclick={onClickDefaultButton}/>
    </div>
  );
}

export default App;

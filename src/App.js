import './App.css'
import DefaultCard from '../src/components/DefaultCard/index'
import useFetch from './App_getApiInfo'
import DefaultButton from '../src/components/DefaultButton/index'
import React, { useState } from 'react'

let position = 0;

const baseURL = "https://randomuser.me/api/?results=5";

function App() {

  const data = useFetch(baseURL)

  const [personState, setPersonState] = useState([])

  const onClickDefaultButton = () => {
    if (position === data.results.length) {
      setPersonState([])
      position = 0;
    }else{
      setPersonState([...personState, data.results[position]])
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

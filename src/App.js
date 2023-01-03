import axios from "axios"
import './App.css'
import DefaultCard from '../src/components/DefaultCard/index'
// import apiData from '../src/App_mockdata'
import DefaultButton from '../src/components/DefaultButton/index'
import React, { useState, useEffect } from 'react'

let position = 0;

const baseURL = "https://randomuser.me/api/?results=5";

function App() {

  const [apiData, setApiData] = useState({})

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setApiData(response.data)
    });
  }, []);

  const [personState, setPersonState] = useState([])

  const onClickDefaultButton = () => {
    if (position === apiData.results.length) {
      setPersonState([])
      position = 0;
    }else{
      setPersonState([...personState, apiData.results[position]])
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

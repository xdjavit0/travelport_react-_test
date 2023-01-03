import './App.css';
import DefaultCard from '../src/components/DefaultCard/index'
import data from '../src/App_mockdata'

function App() {
  return (
    <div className="App">
      {data.map((person, index) =><DefaultCard key={index} name={person.name.first} surname={person.name.last} photo={person.picture.medium} email={person.email}/>)}
    </div>
  );
}

export default App;

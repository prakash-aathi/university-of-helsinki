import { useState } from 'react'
import Filter from './components/Filter';
import Form from './components/Form';
import Persons from './components/Persons';

const App = () => {
//  store data when adding new person
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: "1001" }]);
// render data when filtering or adding new person
  const [render, setRender] = useState(persons);
// store data when filtering
  const [filter, setFilter] = useState({ name: "" });

  const handleSubmit = (newName) => {
    if (persons.some(person => person.name === newName.name)) {
      alert(`${newName.name} is already added to the phonebook`);
      return;
    }
    setPersons(persons.concat({name:newName.name,number:newName.number}));
    setRender(persons.concat({name:newName.name,number:newName.number}));
    console.log("after add render ",render);
  };

  const handleFilter = (event) => {
    setFilter({ name: event.target.value });
    const filterResult = persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase()));
    filterResult.length === 0 ? setRender(persons) : setRender(filterResult);
    console.log("Filter Results",filterResult);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter.name} handleFilter={handleFilter} />

      <h2>add a new</h2>
      <Form handleAddPerson={handleSubmit}  />

      <h2>Numbers</h2>
      <Persons render={render} />
      
    </div>
  );
};

export default App;
import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) => {
  // if there is no key in a list react will re-render the entire list
  return <Person 
    key={person.id}
    click={() => props.clicked(index)}
    changed={(event) => props.changed(event, person.id)}
    name={person.name}
    age={person.age}
    focus={person.focus}>{person.bio}</Person>
});

export default persons;

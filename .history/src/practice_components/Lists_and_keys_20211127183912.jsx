import React from 'react'
import Person from '../components/Person'

function Lists_and_keys() {
    const persons = [
        { id : 1 , 
          name : 'John',
          age : 18,
          skill : 'React'
        } , 
        { id : 2 , 
            name : 'John',
            age : 18,
            skill : 'Express'
          } ,
        { id : 3 , 
            name : 'John',
            age : 18,
            skill : 'Angular'
        } , 
    ]
    const personList = persons.map(person => <Person key = {person.id} />)
    return (
        <div>
            <personList />
        </div>
    )
}

export default Lists_and_keys

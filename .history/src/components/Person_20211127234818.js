import React from 'react'

function Person(person) {  
return (
    <div>
        <h2>
   {person.id} I am {person.name} , I am {person.age} years old , my interest is {person.skill}
        </h2>
    </div>
)
}

export default Person
// Here we are exporting the Person file 
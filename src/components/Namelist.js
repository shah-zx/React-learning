import React from 'react'
import Person from 'react'
function Namelist() {
    const names = ['Bruce', 'Hamza', 'shahnawaz']
    const persons = [

        {
            id: 1,
            name: 'paul',
            age: 36,
            skill: 'React'
        },
        {
            id: 2,
            name: 'george',
            age: 46,
            skill: 'React'
        },
        {
            id: 3,
            name: 'john',
            age: 16,
            skill: 'React'
        },
        {
            id: 4,
            name: 'riya',
            age: 26,
            skill: 'React'
        }
    ]

    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    // return (
    //     <div>
    //         {/* <h2>{name[0]}</h2>
    //         <h2>{name[1]}</h2>
    //        // <h2>{name[2]}</h2> */}

    //         {
    //             names.map(name => <h2>{name}</h2>)
    //         }

    //     </div>
    // )


    // const personList  = persons.map(person  => <Person key={person.id} person = {person} />)
    return <div>{nameList}</div>


}

export default Namelist


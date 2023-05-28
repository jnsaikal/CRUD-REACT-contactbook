import React, { useState } from 'react'
import "./EditContact.css"
const EditContact = (props) => {
    const [person, setPerson] = useState({})
    const handleEditInputName = (e) =>{
        let newObj = {...person}
        newObj.name = e.target.value;
        setPerson(newObj)
    }      
    const handleEditInputLastName = (e) =>{
        let newObj = {...person}
        newObj.lastName = e.target.value;
        setPerson(newObj)
    }
    const handleEditInputEmail = (e) =>{
        let newObj = {...person}
        newObj.email = e.target.value;
        setPerson(newObj)
    }
    const handleEditInputNumber= (e) =>{
        let newObj = {...person}
        newObj.number = e.target.value;
        setPerson(newObj)
    }
      
  return (
    <div className='main-modal'>
      <div className='inner-modal'>
        <div className="close">
            <button className='close close-btn' onClick={props.handleCloseModal}>Close</button>
        </div>
        <div className="inputs">
        <input className='input' type="text" onChange={handleEditInputName}
        value={person.name} />
        <input className='input' type="text" onChange={handleEditInputLastName}
        value={person.lastName} />
        <input className='input' type="text" onChange={handleEditInputEmail}
        value={person.email} />
        <input className='input' type="number" onChange={handleEditInputNumber}
        value={person.number} />
        </div>
        <div className='save'>
        <button className='save save-btn' onClick={()=>props.handleSaveContact(person)}>Save Changes</button>
        </div>
      </div>
    </div>
  )
}

export default EditContact
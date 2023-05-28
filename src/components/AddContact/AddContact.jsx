import React, { useState } from 'react'
import "./AddContact.css"

const AddContact = (props) => {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")

    function handleInputName (e){
        setName(e.target.value)
    }
    function handleInputLastName (e){
        setLastName(e.target.value)
    }    
    function handleInputEmail (e){
        setEmail(e.target.value)
    }   
    function handleInputNumber (e){
        setNumber(e.target.value)
    }
    function handleAdd (){
        if(!name||
            !lastName||
            !email||
            !number){
            alert("inputs are empty")
            return
        }
        const newContact = {
            name:name,
            lastName: lastName,
            email:email,
            number:number,
            id:Date.now()
        }

        props.handleContact(newContact);
        setName("")
        setLastName("")
        setEmail("") 
        setNumber("")
    }
  return (
    <div className="record-input">
       <h2>ADD NEW CONTACT</h2>
       <input type="text" placeholder='Name' value={name} onChange={handleInputName}/>
       <br />
       <input type="text" placeholder='Last Name' value={lastName} onChange={handleInputLastName}/>
       <br />
       <input type="text" placeholder='E-mail' value={email} onChange={handleInputEmail}/>
       <br />
       <input type="number" placeholder='Number' value={number} onChange={handleInputNumber} />

       <button onClick={handleAdd}>Add Contact</button>
    </div>
  )
}

export default AddContact
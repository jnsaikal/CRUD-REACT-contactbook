import React, { useState } from 'react'
import AddContact from "./components/AddContact/AddContact"
import ContactList from './components/ContactList/ContactList'
import EditContact from './components/EditContact/EditContact'

const App = () => {
  const [contacts, setContacts] = useState([]) 
 
  const handleContact = (newObj)=>{
    let newContacts = [...contacts]
    newContacts.push(newObj);
    setContacts(newContacts)
  }
  const handleDelete = (id)=>{
    let newContacts = contacts.filter((person)=> person.id !==id)
    setContacts(newContacts)
  }

  const [editContact, setEditContact] = useState({})
  const handleEdit = (contactToEdit)=>{
    setModal(true)
    setEditContact(contactToEdit)
  }
  
  const [modal, setModal] = useState(false)
  const handleCloseModal = ()=>{
    setModal(false)
  }

  const handleSaveContact = (updatedContact)=>{
    const newContacts = contacts.map((person)=>{
      if (person.id == updatedContact.id){
        return updatedContact
      }
      return person
    })
    setContacts(newContacts)
    handleCloseModal()
  }
  

  return (
    <div>
      <AddContact handleContact={handleContact}/>
      <ContactList contacts={contacts}
      handleEdit={handleEdit}
      handleDelete ={handleDelete}/>
      { modal ? <EditContact handleSaveContact = {handleSaveContact}
      editContact = {editContact}
      handleCloseModal = {handleCloseModal}/> : null}
    </div>
  )
}

export default App
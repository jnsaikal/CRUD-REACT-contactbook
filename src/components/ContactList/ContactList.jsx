import React from 'react';
import "./ContactList.css"

const ContactList = (props) => {
  const { contacts } = props;

  if (!contacts) {
    return <div>No contacts available</div>;
  }

  return (
    <div className='record-display'>
      <h2>Available Contacts</h2>
      <ul>
        {contacts.map((person) => (
          <li key={person.id}>
            Name:{person.name}
            <br />
            Last Name: {person.lastName}
            <br />
            E-mail:{person.email}
            <br />
            Number:{person.number}
            <br />
            <button onClick={()=>props.handleEdit(person)}>Edit</button>
            <button onClick={()=> props.handleDelete(person.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

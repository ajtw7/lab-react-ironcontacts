// import logo from './logo.svg';
import './App.css';
import allContacts from './contacts.json'
import { useState } from 'react'


const contactsArray = allContacts.slice(0, 5);


function App() {
  const [contact, setContact] = useState(contactsArray)

  

  const randomContact = allContacts[Math.floor(Math.random() * allContacts.length)];
  console.log(randomContact)


  const deleteContact = contactId => {
    const filteredContacts = contactsArray.filter((contact, contactId) => {
      return contact.id !== contactId
    })

    setContact(filteredContacts)
  }
  


  return (
    <div className="App">

      <h2><u>It works like gold.</u></h2>

      <button onClick={() => setContact(contact)}>Add Random Contact</button>

      {contactsArray.map(contact => {
        return (
          <div key={contact.id}>
                <img src={contact.pictureUrl} alt={contact.name} height={100}></img>
                <p>{contact.name}</p>
                <p>{contact.popularity}</p>
              
                {contact.wonEmmy ? <p>🏆</p> : <p>Not yet</p>}
                <button onClick={() => deleteContact(contact.id) }>Remove Contact</button>


          </div>
        )
      })}




    </div>
  );
}

export default App;

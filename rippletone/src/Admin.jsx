import React from "react";
import Card from "./card.jsx";
import contacts from "./contacts";
import './styles.css'

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      image={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function Admin() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default Admin;

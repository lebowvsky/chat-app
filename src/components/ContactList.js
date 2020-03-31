import React from 'react';
import './Contact.css';
import Contact from './Contact';



  

const ContactList = ({name, avatar, online}) => {

     return (
        
        <Contact
            name={name}
            avatar={avatar}
            online={online}
        />
        
      )
}

export default ContactList;
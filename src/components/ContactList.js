import React from 'react';
import './Contact.css';


  

const ContactList = ({name, avatar, online}) => {

     return (
        
        <div className="Contact">
            <img className="avatar" src={avatar} alt="" />
            <div>
                <h4 className="name">{name}</h4>
                <div className="status">
                    <div className={online? "status-online" : "status-offline"}></div>
                    <p className="status-text">{online ? "Online" : "Offline"}</p>
                </div>
            </div>
        </div>
        
      )
}

export default ContactList;
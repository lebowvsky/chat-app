import React from 'react';
import './Contact.css'

const avatar = "https://randomuser.me/api/portraits/men/53.jpg";
const name = "Kyle Ramirez";
const online = true;

function Contact() {
    return (
        <div className="Contact">
            <img className="avatar" src={avatar} alt="" />
            <div>
                <h4 className="name">{name}</h4>
                <div className="status">
                    <div className="status-online"></div>
                    <p className="status-text">{online ? "Online" : "Offline"}</p>
                </div>
            </div>

        </div>
    );
}



export default Contact;

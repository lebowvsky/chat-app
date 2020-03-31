import React from 'react';
import './Contact.css';
import propTypes from 'prop-types';

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            online: props.online,
        }
    }

    render(){
        return (
        <div className="Contact">
            <img className="avatar" src={this.props.avatar} alt="" />
            <div>
                <h4 className="name">{this.props.name}</h4>
                <div className="status" onClick={event => {
                    const newOnline = !this.state.online;
                    this.setState({online: newOnline})
                }}
                >
                    <div className={this.state.online? "status-online" : "status-offline"}></div>
                    <p className="status-text">{this.state.online ? "Online" : "Offline"}</p>
                </div>
            </div>

        </div>
        )
    }
}

Contact.propTypes = {
    name: propTypes.string.isRequired,
    avatar: propTypes.string.isRequired,
    online: propTypes.bool.isRequired
}

export default Contact;
